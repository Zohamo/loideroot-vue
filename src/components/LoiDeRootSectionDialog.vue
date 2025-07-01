<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import Dialog from 'primevue/dialog'
import loiDeRoot from '@/assets/json/loi-de-root.json'

const props = defineProps(['anchor'])
defineEmits(['visible'])

const dialog = ref({
  visible: false,
  header: '',
  content: '',
})
const topic = ref({})
const content = computed(() => topic?.value?.content ?? topic?.value?.text)

watchEffect(() => {
  if (props.anchor) {
    console.log('anchor', props.anchor)
    const arrAnchor = props.anchor.split('.')
    let id = arrAnchor[0]
    topic.value = loiDeRoot.find((section) => section.id == id)
    if (arrAnchor.length > 1) {
      id += `.${arrAnchor[1]}`
      topic.value = topic.value?.subsections?.find((subsection) => subsection.id == id)
      if (arrAnchor.length > 2) {
        id += `.${arrAnchor[2]}`
        topic.value = topic.value?.topics?.find((topic) => topic.id == id)
        if (arrAnchor.length > 3) {
          id += `.${arrAnchor[3]}`
          topic.value = topic.value?.items?.find((item) => item.id == id)
          if (arrAnchor.length > 4) {
            id += `.${arrAnchor[4]}`
            topic.value = topic.value?.subitems?.find((subitem) => subitem.id == id)
          }
        }
      }
    }
    dialog.value.header = `${props.anchor}. ${topic?.value?.title}`
    dialog.value.visible = true
  }
})
</script>

<template>
  <Dialog
    v-model:visible="dialog.visible"
    modal
    maximizable
    :header="dialog.header"
    @hide="$emit('visible', false)"
    :style="{ margin: '2rem' }"
  >
    <div v-html="content" />
    <template #footer>
      <RouterLink
        class="italic"
        :to="{ path: `/loi-de-root/${anchor.split('.')[0]}`, hash: `#${anchor}` }"
        @click="dialog.visible = false"
        >Aller à {{ dialog.header }} <i class="pi pi-arrow-right ml-2"
      /></RouterLink>
    </template>
  </Dialog>
</template>

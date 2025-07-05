<script setup lang="ts">
import { ref, useTemplateRef, watchEffect } from 'vue'
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
const rel = ref({})
const contentRef = useTemplateRef('content')

watchEffect(() => {
  if (props.anchor) {
    const arrAnchor = props.anchor.split('.')
    let id = arrAnchor[0]
    rel.value = loiDeRoot.find((section) => section.id == id)
    dialog.value.header = `<h2>${id}. ${rel.value.title}</h2>`
    if (arrAnchor.length > 1) {
      id += `.${arrAnchor[1]}`
      rel.value = rel.value?.subsections?.find((subsection) => subsection.id == id)
      dialog.value.header += `<h3>${id}. ${rel.value.title}</h3>`
      if (arrAnchor.length > 2) {
        id += `.${arrAnchor[2]}`
        rel.value = rel.value?.topics?.find((rel) => rel.id == id)
        dialog.value.header += `<strong>${id}. ${rel.value.title}</strong>`
        if (arrAnchor.length > 3) {
          id += `.${arrAnchor[3]}`
          rel.value = rel.value?.items?.find((item) => item.id == id)
          dialog.value.header += `<br /><strong class="ml-2">${id}. ${rel.value.title}</strong>`
          if (arrAnchor.length > 4) {
            id += `.${arrAnchor[4]}`
            rel.value = rel.value?.subitems?.find((subitem) => subitem.id == id)
            dialog.value.header += `<br /><strong class="ml-4">${id}. ${rel.value.title}</strong>`
          }
        }
      }
    }
    dialog.value.content = rel?.value?.content ?? rel?.value?.text
    contentRef.value?.querySelectorAll('a').forEach((link) => {
      const newAnchor = link.href.split('/')[link.href.split('/').length - 1]
      link.href = `${newAnchor.split('.')[0]}#${newAnchor}`
    })
    dialog.value.visible = true
  }
})
</script>

<template>
  <Dialog
    v-model:visible="dialog.visible"
    modal
    dismissableMask
    maximizable
    @hide="$emit('visible', false)"
    :style="{ width: '90%' }"
  >
    <template #header>
      <div v-html="dialog.header" />
    </template>
    <div ref="content" v-html="dialog.content" />
    <template #footer>
      <RouterLink
        class="italic"
        :to="{ path: `/loi-de-root/${anchor.split('.')[0]}`, hash: `#${anchor}` }"
        @click="dialog.visible = false"
        >Aller à {{ anchor }}. <span v-html="rel.title" /> <i class="pi pi-arrow-right ml-2"
      /></RouterLink>
    </template>
  </Dialog>
</template>

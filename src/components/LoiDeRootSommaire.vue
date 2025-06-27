<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'
import loiDeRoot from '../assets/json/loi-de-root.json'

const props = defineProps({ hide: Boolean })
const emit = defineEmits(['hide'])

const visible = ref(false)

watch(props, () => {
  if (props.hide) {
    visible.value = false
  }
})

const items = ref(
  loiDeRoot.map((section) => {
    return { label: `${section.id}. ${section.title}`, route: `/loi-de-root/${section.id}` }
  }),
)
items.value.unshift({ label: 'Lire la Loi', route: '/loi-de-root' })
</script>

<template>
  <div class="fixed top-16 right-2">
    <Drawer v-model:visible="visible" @hide="emit('hide')" header="Sommaire" position="right">
      <Menu :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span class="font-root-title" v-html="item.label" />
            </a>
          </router-link>
        </template>
      </Menu>
    </Drawer>
    <Button icon="pi pi-book" @click="visible = true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'
import loiDeRoot from '../assets/json/loi-de-root.json'
import { onBeforeRouteUpdate } from 'vue-router'

const visible = ref(false)

const items = ref<{ label: string; route: { name: string; params?: { id: string } } }[]>(
  loiDeRoot.map((section) => ({
    label: `${section.id}. ${section.title}`,
    route: { name: 'loi-de-root-section', params: { id: section.id } },
  })),
)
items.value.unshift({ label: 'Lire la Loi', route: { name: 'loi-de-root' } })

onBeforeRouteUpdate(async () => {
  visible.value = false
  window.scroll({ top: 0 })
})
</script>

<template>
  <div class="fixed top-16 right-2">
    <Drawer v-model:visible="visible" header="Sommaire" position="right">
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

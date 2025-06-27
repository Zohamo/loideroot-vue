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
      <div class="flex justify-center">
        <Menu :model="items">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span class="ml-2" v-html="item.label" />
              </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span class="ml-2" v-html="item.label" />
            </a>
          </template>
        </Menu>
      </div>
    </Drawer>
    <Button class="" icon="pi pi-book" @click="visible = true" />
  </div>
</template>

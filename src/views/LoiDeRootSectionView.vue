<script setup lang="ts">
import { computed, ref } from 'vue'
import loiDeRoot from '../assets/json/loi-de-root.json'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import LoiDeRootSommaire from '@/components/LoiDeRootSommaire.vue'
import { Button } from 'primevue'

const id = ref(useRoute().params.id)
const currIdx = ref(-1)
const section = ref(
  loiDeRoot.find((sec, idx) => {
    if (sec.id == id.value) {
      currIdx.value = idx
      return true
    }
    return false
  }),
)
const prev = computed(() =>
  currIdx.value > 0 && loiDeRoot[currIdx.value - 1] ? loiDeRoot[currIdx.value - 1] : {},
)
const next = computed(() =>
  currIdx.value <= 15 && loiDeRoot[currIdx.value + 1] ? loiDeRoot[currIdx.value + 1] : {},
)
const hideSommaire = ref(false)

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    id.value = to.params.id
    section.value = loiDeRoot.find((sec, idx) => {
      if (sec.id == id.value) {
        currIdx.value = idx
        return true
      }
      return false
    })
  }
  window.scrollTo(0, 0)
  hideSommaire.value = true
})
</script>

<template>
  <main class="relative" :style="`counter-set: section ${id}`">
    <LoiDeRootSommaire :hide="hideSommaire" @hide="hideSommaire = false" />
    <h1 class="mb-5">La Loi de Root</h1>
    <section v-if="section">
      <h2 v-html="section.title" />
      <p v-if="section.text" v-html="section.text" />
      <template v-if="section.subsections?.length">
        <div v-for="subsection in section.subsections" :key="subsection.id" class="subsection">
          <h3 v-html="subsection.title" />
          <p v-if="subsection.text" v-html="subsection.text" />
          <div v-if="subsection.other" v-html="subsection.other" />
          <ol v-if="subsection.topics?.length">
            <li v-for="topic in subsection.topics" :key="topic.id">
              <strong v-if="topic.title" v-html="topic.title" />
              <span v-if="topic.text" v-html="' ' + topic.text" />
              <ol v-if="topic.items?.length" type="I">
                <li v-for="item in topic.items" :key="item.id">
                  <strong v-if="item.title" v-html="item.title" />
                  <span v-if="item.text" v-html="' ' + item.text" />
                  <ol v-if="item.subitems?.length" type="a">
                    <li v-for="subitem in item.subitems" :key="subitem.id">
                      <strong v-if="subitem.title" v-html="subitem.title" />
                      <span v-if="subitem.text" v-html="' ' + subitem.text" />
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </template>
    </section>
  </main>
  <nav class="px-4 pb-8 flex">
    <Button v-if="prev?.id" class="mr-auto">
      <RouterLink v-slot="{ href, navigate }" :to="`/loi-de-root/${prev.id}`" custom>
        <a v-ripple :href="href" @click="navigate">
          <i class="pi pi-arrow-left mr-2" />
          <span v-html="`${prev.id}. ${prev.title}`" />
        </a>
      </RouterLink>
    </Button>
    <Button v-if="next?.id" class="ml-auto">
      <RouterLink v-slot="{ href, navigate }" :to="`/loi-de-root/${next.id}`" custom>
        <a v-ripple :href="href" @click="navigate">
          <span v-html="`${next.id}. ${next.title}`" />
          <i class="pi pi-arrow-right ml-2" />
        </a>
      </RouterLink>
    </Button>
  </nav>
</template>

<style scoped>
section {
  counter-reset: subsection;
}
.subsection > ol {
  counter-reset: topic;
}
main h2::before {
  content: counter(section) '. ';
}
#appendices h2::before {
  content: counter(section, upper-alpha) '. ';
}
main h3::before {
  counter-increment: subsection;
  content: counter(section) '.' counter(subsection) ' ';
}
#appendices h3::before {
  counter-increment: subsection;
  content: counter(section, upper-alpha) '.' counter(subsection) ' ';
}
main .subsection > ol,
#appendices .subsection > ol {
  padding-left: 0;
  list-style-type: none;
}
main .subsection > ol > li::before {
  counter-increment: topic;
  content: counter(section) '.' counter(subsection) '.' counter(topic) ' ';
}
#appendices .subsection > ol > li::before {
  counter-increment: topic;
  content: counter(section, upper-alpha) '.' counter(subsection) '.' counter(topic) ' ';
}
#index ul {
  list-style-type: none;
}
</style>

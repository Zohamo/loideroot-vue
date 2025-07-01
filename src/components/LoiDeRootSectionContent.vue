<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import LoiDeRootSectionDialog from './LoiDeRootSectionDialog.vue'

defineProps(['section'])
const showAnchor = ref('')
const sectionRef = useTemplateRef('section')
const subsectionRefs = useTemplateRef('subsections')
const topicRefs = useTemplateRef('topics')
const itemRefs = useTemplateRef('items')
const subitemRefs = useTemplateRef('subitems')

onMounted(() => {
  replaceLinksByButtons(sectionRef.value)
  subsectionRefs?.value
    ?.concat(topicRefs.value, itemRefs.value, subitemRefs.value)
    .forEach((content: object) => {
      replaceLinksByButtons(content)
    })
})

function replaceLinksByButtons(content: HTMLDivElement) {
  if (content === null) {
    return
  }
  const links = content.querySelectorAll('a')
  links.forEach((link) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'p-button p-component p-button-link p-0'
    button.innerHTML = link.innerHTML
    button.onclick = () => {
      showAnchor.value = link.href.split('#')[1]
    }
    link.replaceWith(button)
  })
}
</script>

<template>
  <section :id="section.id">
    <h2 v-html="section.title" />
    <div v-if="section.content" ref="section" v-html="section.content" />
    <template v-if="section.subsections?.length">
      <div
        v-for="subsection in section.subsections"
        :key="subsection.id"
        :id="subsection.id"
        class="subsection"
      >
        <h3 v-html="subsection.title" />
        <div v-if="subsection.content" ref="subsections" v-html="subsection.content" />
        <ol v-if="subsection.topics?.length">
          <li v-for="topic in subsection.topics" :key="topic.id" :id="topic.id">
            <strong v-if="topic.title" v-html="topic.title" />
            <span v-if="topic.text" ref="topics" v-html="' ' + topic.text" />
            <ol v-if="topic.items?.length" type="I">
              <li v-for="item in topic.items" :key="item.id" :id="item.id">
                <strong v-if="item.title" v-html="item.title" />
                <span v-if="item.text" ref="items" v-html="' ' + item.text" />
                <ol v-if="item.subitems?.length" type="a">
                  <li v-for="subitem in item.subitems" :key="subitem.id" :id="subitem.id">
                    <strong v-if="subitem.title" v-html="subitem.title" />
                    <span v-if="subitem.text" ref="subitems" v-html="' ' + subitem.text" />
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </template>
    <LoiDeRootSectionDialog :anchor="showAnchor" @visible="showAnchor = ''" />
  </section>
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

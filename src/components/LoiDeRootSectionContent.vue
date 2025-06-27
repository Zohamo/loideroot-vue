<script setup lang="ts">
defineProps(['section'])
</script>

<template>
  <section>
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

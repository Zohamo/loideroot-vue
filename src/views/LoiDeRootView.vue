<script setup lang="ts">
import { ref } from 'vue'
import loiDeRoot from '@/assets/json/loi-de-root.json'
import LoiDeRootNavigation from '@/components/LoiDeRootNavigation.vue'
import LoiDeRootSommaire from '@/components/LoiDeRootSommaire.vue'
const next = ref(loiDeRoot.find((section) => section.id == '1'))
</script>

<template>
  <main class="p-4">
    <LoiDeRootSommaire />
    <header>
      <img
        alt="Loi de Root logo"
        src="@/assets/img/loi-de-root.png"
        style="max-width: 100%; max-height: 50vh; margin: 0 auto"
      />
    </header>
    <section>
      <h2>Lire la Loi</h2>
      <p>
        <em
          >Les textes en petites capitales sont des termes clés. Les textes en italique donnent des
          rappels et des éclaircissements. Les icônes de factions indiquent les règles qui sont
          modifiées par les règles et capacités des factions.</em
        >
      </p>
      <p>
        <i>Root</i> contient deux livrets&nbsp;: ce livret de référence et le livret
        d’apprentissage. Si vous préférez apprendre à jouer sur le ton de la conversation avec de
        nombreux exemples, lisez le guide d’apprentissage. Si vous préférez apprendre à partir de
        règles définies, formelles et concises, lisez la Loi de Root.<br />Ces explications vous
        aideront à interpréter la Loi.
      </p>
      <div class="mb-3">
        <p class="mb-0">
          <strong
            >Q1. J’aimerais faire quelque chose qui ne semble pas être interdit par les règles.
            Est-ce que je peux le faire&nbsp;?</strong
          >
        </p>
        <cite
          >R1. En respectant les limites des actions, on peut supposer que oui&nbsp;! Vous serez
          souvent confrontés à des situations imprévues et étonnantes, cela fait partie du jeu,
          alors s’il vous plaît n’envoyez pas tout valser si vous êtes contrarié&hellip;</cite
        >
        <p class="mb-0">
          <strong>Q2. Un autre joueur peut-il refuser que j’effectue une action&nbsp;?</strong>
        </p>
        <cite
          >R2. Aucune action de Root ne nécessite l’accord des autres joueurs. Alors,
          faites-le&nbsp;!</cite
        >
        <p class="mb-0">
          <strong
            >Q3. J’ai l'impression qu’il devrait se passer quelque chose, mais ce n’est pas écrit
            dans les règles. Que faire&nbsp;?</strong
          >
        </p>
        <cite
          >R3. Même si vous avez trouvé une règle similaire dans une autre section du livret, faites
          taire votre instinct et respectez la Loi à la lettre.</cite
        >
        <p class="mb-0">
          <strong
            >Q4. Une règle utilise un terme ou une action spécifique. Un autre terme ou action
            étroitement lié peut-il aussi être inclus dans la règle&nbsp;?</strong
          >
        </p>
        <cite
          >R4. Non&nbsp;! Partez du principe que la règle inclut uniquement le terme original et non
          les autres. Par exemple, «&nbsp;<mark>déplacer</mark>&nbsp;» et
          «&nbsp;<mark>placer</mark>&nbsp;» sont deux termes différents à bien distinguer dans des
          points de règles comme le Donjon (<a href="#6.2.2">6.2.2</a>).</cite
        >
      </div>
      <p>
        Si vous avez d’autres questions, n’hésitez pas à vous rendre sur notre site&nbsp;:
        <a href="https://ledergames.com/root">ledergames.com/root</a>
      </p>
      <p>
        S’il vous manque des éléments de jeu ou qu'ils sont abimés, rendez-vous sur&nbsp;:
        <a href="https://ledergames.com/replacements">ledergames.com/replacements</a>
      </p>
    </section>
  </main>
  <LoiDeRootNavigation :next="next" />
</template>

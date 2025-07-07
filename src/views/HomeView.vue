<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="italic">
      <p>
        L'infâme Marquise de Chat s'est emparée de la grande forêt, déterminée à en exploiter les
        richesses. Sous son règne, les nombreuses créatures de la forêt se sont regroupées. Cette
        Alliance cherchera à renforcer ses ressources et à subvertir le règne des Chats. Dans cette
        entreprise, l'Alliance pourrait faire appel aux Vagabonds errants, capables de se déplacer
        sur les sentiers forestiers les plus dangereux. Si certains peuvent sympathiser avec les
        espoirs et les rêves de l'Alliance, ces vagabonds sont assez vieux pour se souvenir des
        grands oiseaux de proie qui dominaient autrefois les bois.
      </p>
      <p>
        Pendant ce temps, aux confins de la région, les fiers et querelleurs de la Canopée ont
        trouvé un nouveau commandant qui, espèrent-ils, guidera leur faction vers la reconquête de
        leurs droits ancestraux.
      </p>
      <p>
        Le décor est planté pour une compétition qui décidera du sort de la grande forêt. Aux
        joueurs de décider quel groupe s'imposera.
      </p>
    </div>
    <h2>Introduction</h2>
    <p>
      <i>Root</i> est un jeu palpitant d’aventure et de guerre. Vous incarnez une des quatre
      factions et luttez pour prouver que vous êtes le dirigeant légitime de la vaste Forêt.
    </p>
    <h4 class="font-root-title normal-case">Aperçu du jeu</h4>
    <p>
      Chaque tour est découpé en trois phases : <mark>Aurore</mark>, <mark>Jour</mark>, et
      <mark>Crépuscule</mark>. Après avoir effectué ces phases dans l’ordre, votre tour prend fin et
      le joueur à votre gauche commence son tour. Les trois phases sont décrites en détail sur les
      plateaux de faction des joueurs.
    </p>
    <h4 class="font-root-title normal-case">Victoire et points de victoire</h4>
    <p>
      Il y a deux manières de gagner la partie&nbsp;:
      <strong>marquer 30 points de victoire</strong> ou
      <strong>jouer et accomplir une carte Domination</strong>. Les cartes Domination ne peuvent pas
      être jouées en début de partie, vous pouvez en prendre connaissance plus tard.
    </p>
    <p>Chaque faction de <i>Root</i> marque des points de victoire à sa façon.</p>
    <p class="mt-6">
      Pour apprendre <i>Root</i> à partir de règles définies, formelles et concises, lisez
      <router-link :to="{ name: 'loi-de-root' }">la Loi de Root</router-link>.
    </p>
  </main>
</template>

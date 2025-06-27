<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img
      alt="Loi de Root logo"
      src="@/assets/img/Root-Paper-Logo-2.png"
      style="max-width: 100%; margin: 0 auto"
    />
  </header>
  <div class="p-3">
    <p>
      Root est un jeu asymétrique d'aventure et de guerre dans lequel les joueurs se battent pour le
      contrôle d'une vaste région sauvage.
    </p>
    <p>
      La malfaisante Marquise de Cat s'est emparée de la grande forêt, avec l'intention de récolter
      ses richesses. Sous son règne, les créatures de la forêt se sont regroupées. Cette Alliance
      cherchera à se renforcer et à renverser le régime des chats.
    </p>
    <p>
      Pour cela, l'Alliance peut faire appel à l'aide des vagabonds errants qui sont capables de se
      déplacer sur les chemins les plus dangereux.
    </p>
    <p>
      Pendant ce temps, la canopée vont tenter de mener leurs oiseaux de proies pour contrôler la
      forêt. Chaque joueur a des capacités uniques et une condition de victoire différente.
    </p>
    <p>
      Dans Root, les joueurs dirigent le récit, et les différences entre chaque rôle créent un
      niveau inégalé d'interaction et de rejouabilité. Explorez le monde fantastique de Root&nbsp;!
    </p>
  </div>
  <nav>
    <RouterLink to="/loi-de-root">La Loi de Root</RouterLink>
  </nav>
</template>

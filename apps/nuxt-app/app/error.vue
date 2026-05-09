<script setup lang="ts">
import type { RouteLocationAsRelative } from 'vue-router'

import type { NuxtError } from '#app'

const { error } = defineProps<{
  /** Error object from Nuxt */
  error: NuxtError
}>()

const indexRoute: RouteLocationAsRelative = {
  name: 'index'
}
</script>

<template lang="pug">
  NuxtLayout
    div
      h1 {{ error.status }}
      h2 {{ error.statusText }}
      NuxtLink(:to="indexRoute") Go back home
</template>

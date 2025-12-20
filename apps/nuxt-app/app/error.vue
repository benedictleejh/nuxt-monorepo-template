<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  /** Error object from Nuxt */
  error: NuxtError
}>()
</script>

<template lang="pug">
  NuxtLayout
    div
      h1 {{ error.statusCode }}
      h2 {{ error.statusMessage }}
      NuxtLink(:to="{ name: 'index' }") Go back home
</template>

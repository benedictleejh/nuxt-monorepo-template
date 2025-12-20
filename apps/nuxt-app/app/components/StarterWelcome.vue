<script setup lang="ts">
const {
  title = 'Welcome to Nuxt!'
} = defineProps<{
  /** Page title when StarterWelcome is used */
  title?: string
}>()

const nuxtVersion = computed(() => useNuxtApp().versions.nuxt)

useHead({
  title: () => title
})
</script>

<template lang="pug">
  .welcome-main
    .welcome-container
      h1.welcome-header
        NuxtLink.welcome-header-link(
          href="https://nuxt.com?utm_source=nuxt-welcome"
          target="_blank"
        )
          svg.welcome-header-link-logo(
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 200"
          )
            path(
              fill="#00DC82"
              d="M168.303 200h111.522c3.543 0 7.022-.924 10.09-2.679A20.1 20.1 0 0 0 297.3 190a19.86 19.86 0 0 0 2.7-10.001 19.86 19.86 0 0 0-2.709-9.998L222.396 41.429a20.1 20.1 0 0 0-7.384-7.32 20.3 20.3 0 0 0-10.088-2.679c-3.541 0-7.02.925-10.087 2.68a20.1 20.1 0 0 0-7.384 7.32l-19.15 32.896L130.86 9.998a20.1 20.1 0 0 0-7.387-7.32A20.3 20.3 0 0 0 113.384 0c-3.542 0-7.022.924-10.09 2.679a20.1 20.1 0 0 0-7.387 7.319L2.709 170A19.85 19.85 0 0 0 0 179.999c-.002 3.511.93 6.96 2.7 10.001a20.1 20.1 0 0 0 7.385 7.321A20.3 20.3 0 0 0 20.175 200h70.004c27.737 0 48.192-12.075 62.266-35.633l34.171-58.652 18.303-31.389 54.93 94.285h-73.233zm-79.265-31.421-48.854-.011 73.232-125.706 36.541 62.853-24.466 42.01c-9.347 15.285-19.965 20.854-36.453 20.854"
            )
            path(
              fill="currentColor"
              d="M377 200a4 4 0 0 0 4-4v-93s5.244 8.286 15 25l38.707 66.961c1.789 3.119 5.084 5.039 8.649 5.039H470V50h-27a4 4 0 0 0-4 4v94l-17-30-36.588-62.98c-1.792-3.108-5.081-5.02-8.639-5.02H350v150zm299.203-56.143L710.551 92h-25.73a9.97 9.97 0 0 0-8.333 4.522L660.757 120.5l-15.731-23.978A9.97 9.97 0 0 0 636.693 92h-25.527l34.348 51.643L608.524 200h24.966a9.97 9.97 0 0 0 8.29-4.458l19.18-28.756 18.981 28.72a9.97 9.97 0 0 0 8.313 4.494h24.736zM724.598 92h19.714V60.071h28.251V92H800v24.857h-27.437V159.5c0 10.5 5.284 15.429 14.43 15.429H800V200h-16.869c-23.576 0-38.819-14.143-38.819-39.214v-43.929h-19.714zM590 92h-15c-3.489 0-6.218.145-8.5 2.523-2.282 2.246-2.5 3.63-2.5 7.066v52.486c0 8.058-.376 12.962-4 16.925-3.624 3.831-8.619 5-16 5-7.247 0-12.376-1.169-16-5-3.624-3.963-4-8.867-4-16.925v-52.486c0-3.435-.218-4.82-2.5-7.066C519.218 92.145 516.489 92 513 92h-15v62.422q0 21.006 11.676 33.292C517.594 195.905 529.103 200 544 200s26.204-4.095 34.123-12.286Q590 175.428 590 154.422z"
            )
          span.welcome-header-link-version {{ nuxtVersion }}
      .welcome-content-top-row
        .welcome-content-main-card
          .welcome-content-main-card-icon
            svg.welcome-content-main-card-icon-svg(
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            )
              path(
                fill="currentColor"
                d="m228.1 121.2-143.9-88A8 8 0 0 0 72 40v176a8 8 0 0 0 12.2 6.8l143.9-88a7.9 7.9 0 0 0 0-13.6"
                opacity=".2"
              )
              path(
                fill="currentColor"
                d="M80 232a15.5 15.5 0 0 1-7.8-2.1A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9 15.5 15.5 0 0 1 16.1.3l144 87.9a16 16 0 0 1 0 27.4l-144 87.9A15.4 15.4 0 0 1 80 232m0-192v176l144-88Z"
              )
          h2.welcome-content-card-header Get started
          p.welcome-content-main-card-desc
            | Remove this welcome page by replacing&nbsp;
            NuxtLink.welcome-content-card-monospace-text StarterWelcome
            |  in&nbsp;
            NuxtLink.welcome-content-card-monospace-text-link(
              href="https://nuxt.com/docs/guide/directory-structure/pages"
              target="_blank"
              rel="noopener"
            ) app/pages/index.vue
            |  with your own code, and removing the&nbsp;
            NuxtLink.welcome-content-card-monospace-text app/components/StarterWelcome.vue
            |  file.
        NuxtLink.group.welcome-content-card(
          href="https://nuxt.com/docs?utm_source=nuxt-welcome"
          target="_blank"
        )
          .welcome-content-card-icon
            svg.welcome-content-card-icon-svg(
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            )
              path(
                fill="currentColor"
                d="M136 48v128H88V80H40V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8 8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m89.9 149.6-8.3-30.9-46.4 12.5 8.3 30.9a8 8 0 0 0 9.8 5.6l30.9-8.3a8 8 0 0 0 5.7-9.8M184.5 43.1a8.1 8.1 0 0 0-9.8-5.7l-30.9 8.3a8.1 8.1 0 0 0-5.7 9.8l8.3 30.9L192.8 74Z"
                opacity=".2"
              )
              path(
                fill="currentColor"
                d="M233.6 195.6 192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2 15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2 15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l27.8 103.7a16 16 0 0 0 15.5 11.9 20 20 0 0 0 4.1-.5l30.9-8.3a16 16 0 0 0 11.3-19.6M156.2 92.1l30.9-8.3 20.7 77.3-30.9 8.3Zm20.5-46.9 6.3 23.1-30.9 8.3-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32zm90.2-8.3-30.9 8.3-6.3-23.2 31-8.3z"
              )
          svg.welcome-content-card-new-tab-link-icon(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          )
            path(
              fill="currentColor"
              d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8"
            )
          h2.welcome-content-card-header Documentation
          p.welcome-content-card-desc We highly recommend you take a look at the Nuxt documentation to level up.
      .welcome-content-row
        NuxtLink.group.welcome-content-card(
          href="https://nuxt.com/modules?utm_source=nuxt-welcome"
          target="_blank"
        )
          .welcome-content-card-icon
            svg.welcome-content-card-icon-svg(
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            )
              path(
                fill="currentColor"
                d="M64 216a8 8 0 0 1-8-8v-42.7a27.6 27.6 0 0 1-14.1 2.6A28 28 0 1 1 56 114.7V72a8 8 0 0 1 8-8h46.7a27.6 27.6 0 0 1-2.6-14.1A28 28 0 1 1 161.3 64H208a8 8 0 0 1 8 8v42.7a27.6 27.6 0 0 0-14.1-2.6 28 28 0 1 0 14.1 53.2V208a8 8 0 0 1-8 8Z"
                opacity=".2"
              )
              path(
                fill="currentColor"
                d="M220.3 158.5a8.1 8.1 0 0 0-7.7-.4 20.2 20.2 0 0 1-23.2-4.4 20 20 0 0 1 13.1-33.6 19.6 19.6 0 0 1 10.1 1.8 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72a16 16 0 0 0-16-16h-36.2c.1-1.3.2-2.7.2-4a36.1 36.1 0 0 0-38.3-35.9 36 36 0 0 0-33.6 33.3 36.4 36.4 0 0 0 .1 6.6H64a16 16 0 0 0-16 16v32.2l-4-.2a35.6 35.6 0 0 0-26.2 11.4 35.3 35.3 0 0 0-9.7 26.9 36 36 0 0 0 33.3 33.6 36.4 36.4 0 0 0 6.6-.1V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.7a8.2 8.2 0 0 0-3.7-6.8M208 208H64v-42.7a8.2 8.2 0 0 0-3.7-6.8 8.1 8.1 0 0 0-7.7-.4 19.6 19.6 0 0 1-10.1 1.8 20 20 0 0 1-13.1-33.6 20.2 20.2 0 0 1 23.2-4.4 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72h46.7a8.2 8.2 0 0 0 6.8-3.7 8.1 8.1 0 0 0 .4-7.7 19.6 19.6 0 0 1-1.8-10.1 20 20 0 0 1 33.6-13.1 20.2 20.2 0 0 1 4.4 23.2 8.1 8.1 0 0 0 .4 7.7 8.2 8.2 0 0 0 6.8 3.7H208v32.2a36.4 36.4 0 0 0-6.6-.1 36 36 0 0 0-33.3 33.6A36.1 36.1 0 0 0 204 176l4-.2Z"
              )
          svg.welcome-content-card-new-tab-link-icon(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          )
            path(
              fill="currentColor"
              d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8"
            )
          h2.welcome-content-card-header Modules
          p.welcome-content-card-desc Discover our list of modules to supercharge your Nuxt project.
        NuxtLink.group.welcome-content-card(
          href="https://nuxt.com/docs/examples?utm_source=nuxt-welcome"
          target="_blank"
        )
          .welcome-content-card-icon
            svg.welcome-content-card-icon-svg(
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            )
              path(
                fill="currentColor"
                d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                opacity=".2"
              )
              path(
                fill="currentColor"
                d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
              )
          svg.welcome-content-card-new-tab-link-icon(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          )
            path(
              fill="currentColor"
              d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8"
            )
          h2.welcome-content-card-header Examples
          p.welcome-content-card-desc Explore different way of using Nuxt features and get inspired.
        NuxtLink.group.welcome-content-card(
          href="https://nuxt.com/deploy?utm_source=nuxt-welcome"
          target="_blank"
        )
          .welcome-content-card-icon
            svg.welcome-content-card-icon-svg(
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            )
              path(
                fill="currentColor"
                d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z"
                opacity=".2"
              )
              path(
                fill="currentColor"
                d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7 1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6 8 8 0 0 0 8 8 91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1"
              )
              path(
                fill="currentColor"
                d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9 16 16 0 0 0 12.2 11.1l39.5 7.9 41.8 41.8 7.9 39.5a16 16 0 0 0 11.1 12.2 14.7 14.7 0 0 0 4.6.7 15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2M74.7 79.4H120l-39.9 39.9-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6 4 26.7-13.8 47.7-21.6 55.5L128 161.9 94.1 128Zm20.3 115.5-32.4 32.3-7.5-37.7 39.9-39.9Z"
              )
          svg.welcome-content-card-new-tab-link-icon(
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          )
            path(
              fill="currentColor"
              d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8"
            )
          h2.welcome-content-card-header Deploy
          p.welcome-content-card-desc Learn how to deploy your Nuxt project on different providers.
      footer.welcome-footer
        ul.welcome-footer-info-list
          li
            NuxtLink.welcome-social-media-icon(
              href="https://go.nuxt.com/github"
              target="_blank"
            )
              span.screen-reader-only Nuxt GitHub Repository
              svg(
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              )
                path(
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                )
          li
            NuxtLink.welcome-social-media-icon(
              href="https://go.nuxt.com/discord"
              target="_blank"
            )
              span.screen-reader-only Nuxt Discord Server
              svg(
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              )
                path(
                  fill="currentColor"
                  d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"
                )
          li
            NuxtLink.welcome-social-media-icon(
              href="https://go.nuxt.com/x"
              target="_blank"
            )
              span.screen-reader-only Nuxt on X
              svg(
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              )
                path(
                  fill="currentColor"
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                )
          li
            NuxtLink.welcome-social-media-icon(
              href="https://go.nuxt.com/bluesky"
              target="_blank"
            )
              span.screen-reader-only Nuxt Bluesky
              svg(
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              )
                path(
                  fill="currentColor"
                  d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"
                )
          li
            NuxtLink.welcome-social-media-icon(
              href="https://go.nuxt.com/linkedin"
              target="_blank"
            )
              span.screen-reader-only Nuxt Linkedin
              svg(
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              )
                path(
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                )
</template>

<style lang="sass">
*,
::after,
::before
  --un-ring-offset-shadow: 0 0 transparent
  --un-ring-shadow: 0 0 transparent
  --un-shadow: 0 0 transparent
  --un-ring-offset-width: 0px
  --un-ring-offset-color: #fff
  --un-ring-width: 0px
  --un-ring-color: rgb(147 197 253 / 50%)

  box-sizing: border-box
  border:
    color: var(--un-default-border-color, #e5e7eb)
    style: solid
    width: 0

html
  line-height: 1.5
  text-size-adjust: 100%
  tab-size: 4
  -webkit-tap-highlight-color: transparent
  font:
    family: (
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    )
    feature-settings: normal
    variation-settings: normal

body
  line-height: inherit
  margin: 0

h1,
h2
  font:
    size: inherit
    weight: inherit

a
  color: inherit
  text-decoration: inherit

h1,
h2,
p
  margin: 0

ul
  margin: 0
  list-style: none
  padding: 0

svg
  display: block
  vertical-align: middle
</style>

<style lang="sass" scoped>
@mixin screen-reader-only
  // sr-only
  height: 1px
  margin: -1px
  overflow: hidden
  padding: 0
  width: 1px
  clip-path: rect(0 0 0 0)
  border-width: 0
  white-space: nowrap
  position: absolute

@mixin absolute
  position: absolute

@mixin relative
  position: relative

@mixin right-4
  right: 1rem

@mixin top-4
  top: 1rem

@mixin grid
  display: grid

@mixin grid-cols-1
  grid-template-columns: repeat(1, minmax(0, 1fr))

@mixin mx-auto
  margin:
    left: auto
    right: auto

@mixin mb-6
  margin-bottom: 1.5rem

@mixin mt-1
  margin-top: 0.25rem

@mixin mt-4
  margin-top: 1rem

@mixin mt-6
  margin-top: 1.5rem

@mixin inline-block
  display: inline-block

@mixin size-18px
  height: 18px
  width: 18px

@mixin size-4
  height: 1rem
  width: 1rem

@mixin group-hover-size-5
  .group:hover &
    height: 1.25rem
    width: 1.25rem

@mixin size-5
  height: 1.25rem
  width: 1.25rem

@mixin h-32px
  height: 32px

@mixin h-8
  height: 2rem

@mixin max-w-980px
  max-width: 980px

@mixin min-h-screen
  min-height: 100vh

@mixin w-32px
  width: 32px

@mixin w-full
  width: 100%

@mixin flex
  display: flex

@mixin inline-flex
  display: inline-flex

@mixin flex-col
  flex-direction: column

@mixin place-content-center
  place-content: center

@mixin items-end
  align-items: flex-end

@mixin items-center
  align-items: center

@mixin justify-center
  justify-content: center

@mixin gap-1
  gap: 0.25rem

@mixin gap-4
  gap: 1rem

@mixin gap-y-4
  row-gap: 1rem

@mixin border
  border-width: 1px

@mixin border-00dc42-opacity-50
  border-color: #00dc4280

@mixin border-00dc82
  border-color: rgb(0 220 130)

@mixin border-gray-200
  border-color: rgb(224 224 224)

@mixin border-green-600-opacity-10
  border-color: #00bb6a1a

@mixin border-green-600-opacity-20
  border-color: #00bb6a33

@mixin hover-border-00dc82
  &:hover
    border-color: rgb(0 220 130)

@mixin rounded
  border-radius: 0.25rem

@mixin rounded-lg
  border-radius: 0.5rem

@mixin bg-00dc42-opacity-10
  background-color: #00dc421a

@mixin bg-00dc82-opacity-5
  background-color: #00dc820d

@mixin bg-gray-50-opacity-10
  background-color: #f5f5f51a

@mixin bg-green-50
  background-color: rgb(208 252 222)

@mixin bg-white
  background-color: rgb(255 255 255)

@mixin p-0-02
  padding: 0.05rem

@mixin p-1
  padding: 0.25rem

@mixin p-6
  padding: 1.5rem

@mixin px-2
  padding:
    left: 0.5rem
    right: 0.5rem

@mixin px-4
  padding:
    left: 1rem
    right: 1rem

@mixin py-1
  padding:
    bottom: 0.25rem
    top: 0.25rem

@mixin text-12px
  font-size: 12px

@mixin text-base
  font-size: 1rem
  line-height: 1.5rem

@mixin text-sm
  font-size: 0.875rem
  line-height: 1.25rem

@mixin group-hover-text-00dc82
  .group:hover &
    color: rgb(0 220 130)

@mixin group-hover-bg-00dc42-opacity-15
  .group:hover &
    background-color: color-mix(in oklab, #00dc42 15%, transparent)

@mixin group-hover-border-00dc42
  .group:hover &
    border-color: #00dc42

@mixin text-00dc82
  color: rgb(0 220 130)

@mixin text-020420
  color: rgb(2 4 32)

@mixin text-020420-opacity-20
  color: #02042033

@mixin text-gray-500
  color: rgb(117 117 117)

@mixin text-gray-700
  color: rgb(66 66 66)

@mixin text-green-700
  color: rgb(0 153 86)

@mixin hover-text-020420
  &:hover
    color: rgb(2 4 32)

@mixin font-bold
  font-weight: 700

@mixin font-semibold
  font-weight: 600

@mixin leading-none
  line-height: 1

@mixin font-mono
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

@mixin antialiased
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

@mixin focus-visible-ring-2
  &:focus-visible
    --un-ring-width: 2px
    --un-ring-offset-shadow: 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)
    --un-ring-shadow: 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)

    box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)

@mixin transition-all
  transition:
    duration: 0.15s
    property: all
    timing-function: cubic-bezier(0.4, 0, 0.2, 1)

@mixin dark-border-00dc82-opacity-50
  @media (prefers-color-scheme: dark)
    border-color: #00dc8280

@mixin dark-border-00dc82-opacity-80
  @media (prefers-color-scheme: dark)
    border-color: #00dc82cc

@mixin group-hover-dark-border-00dc82-opacity-80
  .group:hover &
    @media (prefers-color-scheme: dark)
      border-color: #00dc82cc

@mixin dark-border-white-opacity-10
  @media (prefers-color-scheme: dark)
    border-color: #ffffff1a

@mixin dark-border-white-opacity-20
  @media (prefers-color-scheme: dark)
    border-color: #fff3

@mixin hover-dark-border-00dc82
  &:hover
    @media (prefers-color-scheme: dark)
      border-color: rgb(0 220 130)

@mixin dark-bg-020420
  @media (prefers-color-scheme: dark)
    background-color: rgb(2 4 32)

@mixin dark-bg-white-opcaity-5
  @media (prefers-color-scheme: dark)
    background-color: #ffffff0d

@mixin dark-text-00dc82
  @media (prefers-color-scheme: dark)
    color: rgb(0 220 130)

@mixin dark-text-gray-200
  @media (prefers-color-scheme: dark)
    color: rgb(224 224 224)

@mixin dark-text-gray-400
  @media (prefers-color-scheme: dark)
    color: rgb(158 158 158)

@mixin dark-text-white
  @media (prefers-color-scheme: dark)
    color: rgb(255 255 255)

@mixin dark-text-white-opacity-40
  @media (prefers-color-scheme: dark)
    color: #fff6

@mixin dark-hover-text-white
  &:hover
    @media (prefers-color-scheme: dark)
      color: rgb(255 255 255)

@mixin group-hover-dark-text-gray-100
  .group:hover &
    @media (prefers-color-scheme: dark)
      color: rgb(238 238 238)

@mixin sm-col-span-2
  @media (width >= 640px)
    grid-column: span 2 / span 2

@mixin sm-grid-cols-3
  @media (width >= 640px)
    grid-template-columns: repeat(3, minmax(0, 1fr))

@mixin sm-mb-0
  @media (width >= 640px)
    margin-bottom: 0

@mixin sm-mt-0
  @media (width >= 640px)
    margin-top: 0

@mixin sm-mt-10
  @media (width >= 640px)
    margin-top: 2.5rem

@mixin sm-mt-6
  @media (width >= 640px)
    margin-top: 1.5rem

@mixin sm-h-12
  @media (width >= 640px)
    height: 3rem

@mixin sm-gap-6
  @media (width >= 640px)
    gap: 1.5rem

@mixin sm-px-2-5
  @media (width >= 640px)
    padding:
      left: 0.625rem
      right: 0.625rem

@mixin sm-px-6
  @media (width >= 640px)
    padding:
      left: 1.5rem
      right: 1.5rem

@mixin sm-py-1-5
  @media (width >= 640px)
    padding:
      bottom: 0.375rem
      top: 0.375rem

@mixin sm-text-14px
  @media (width >= 640px)
    font-size: 14px

@mixin sm-text-base
  @media (width >= 640px)
    font-size: 1rem
    line-height: 1.5rem

@mixin lg-px-8
  @media (width >= 1024px)
    padding:
      left: 2rem
      right: 2rem

.welcome
  &-main
    @include antialiased
    @include bg-white
    @include flex
    @include flex-col
    @include items-center
    @include justify-center
    @include min-h-screen
    @include place-content-center
    @include text-020420
    @include text-sm
    @include sm-text-base
    @include dark-bg-020420
    @include dark-text-white

  &-container
    @include flex
    @include flex-col
    @include mt-6
    @include sm-mt-0

  &-header
    @include flex
    @include flex-col
    @include gap-y-4
    @include items-center
    @include justify-center

    &-link
      @include gap-4
      @include inline-flex
      @include items-end

      &-logo
        @include h-8
        @include sm-h-12

      &-version
        @include bg-00dc42-opacity-10
        @include border
        @include border-00dc42-opacity-50
        @include font-mono
        @include font-semibold
        @include inline-block
        @include leading-none
        @include px-2
        @include py-1
        @include rounded
        @include text-00dc82
        @include text-12px
        @include sm-px-2-5
        @include sm-py-1-5
        @include sm-text-14px
        @include group-hover-bg-00dc42-opacity-15
        @include group-hover-border-00dc42

  &-content
    &-top-row
      @include gap-4
      @include grid
      @include grid-cols-1
      @include max-w-980px
      @include mt-6
      @include px-4
      @include w-full
      @include sm-gap-6
      @include sm-grid-cols-3
      @include sm-mt-10

    &-row
      @include gap-4
      @include grid
      @include grid-cols-1
      @include max-w-980px
      @include mt-4
      @include px-4
      @include w-full
      @include sm-gap-6
      @include sm-grid-cols-3
      @include sm-mt-6

    &-main-card
      @include bg-gray-50-opacity-10
      @include border
      @include border-00dc42-opacity-50
      @include flex
      @include flex-col
      @include gap-1
      @include p-6
      @include rounded-lg
      @include sm-col-span-2
      @include dark-bg-white-opcaity-5

      &-icon
        @include bg-00dc82-opacity-5
        @include border
        @include border-00dc82
        @include flex
        @include h-32px
        @include items-center
        @include justify-center
        @include rounded
        @include text-00dc82
        @include w-32px
        @include dark-bg-020420
        @include dark-border-00dc82-opacity-80
        @include dark-text-00dc82

        &-svg
          @include size-18px

      &-desc
        @include text-gray-700
        @include text-sm
        @include dark-text-gray-200

    &-card
      @include bg-gray-50-opacity-10
      @include border
      @include border-gray-200
      @include flex
      @include flex-col
      @include gap-1
      @include hover-border-00dc82
      @include p-6
      @include relative
      @include rounded-lg
      @include transition-all
      @include hover-dark-border-00dc82
      @include dark-bg-white-opcaity-5
      @include dark-border-white-opacity-10

      &-header
        @include font-semibold
        @include mt-1
        @include text-base

      &-monospace-text
        @include bg-green-50
        @include border
        @include font-bold
        @include font-mono
        @include p-0-02
        @include rounded
        @include text-green-700
        @include border-green-600-opacity-10
        @include dark-bg-020420
        @include dark-text-00dc82
        @include dark-border-white-opacity-10

        &-link
          // stylelint-disable-next-line scss/at-extend-no-missing-placeholder
          @extend .welcome-content-card-monospace-text
          @include border-green-600-opacity-20
          @include hover-border-00dc82
          @include dark-border-white-opacity-20

      &-icon
        @include bg-00dc82-opacity-5
        @include border
        @include border-00dc82
        @include flex
        @include h-32px
        @include items-center
        @include justify-center
        @include rounded
        @include text-00dc82
        @include transition-all
        @include w-32px
        @include group-hover-dark-border-00dc82-opacity-80
        @include dark-bg-020420
        @include dark-border-00dc82-opacity-50
        @include dark-text-00dc82

        &-svg
          @include size-5

      &-new-tab-link-icon
        @include absolute
        @include group-hover-size-5
        @include group-hover-text-00dc82
        @include right-4
        @include size-4
        @include text-020420-opacity-20
        @include top-4
        @include transition-all
        @include dark-text-white-opacity-40

      &-desc
        @include text-gray-700
        @include text-sm
        @include dark-text-gray-200
        @include group-hover-dark-text-gray-100

  &-footer
    @include mb-6
    @include mt-6
    @include mx-auto
    @include px-4
    @include w-full
    @include lg-px-8
    @include sm-mb-0
    @include sm-mt-10
    @include sm-px-6

    &-info-list
      @include flex
      @include gap-4
      @include items-center
      @include justify-center

  &-social-media-icon
    @include focus-visible-ring-2
    @include hover-text-020420
    @include text-gray-500
    @include dark-hover-text-white
    @include dark-text-gray-400

.screen-reader-only
  @include screen-reader-only
</style>

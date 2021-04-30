<template>
  <div>
    <base-toast />
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'font-sans antialiased text-gray-900',
      },
    }
  },
}
</script>

<style></style>

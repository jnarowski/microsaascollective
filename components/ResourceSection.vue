<template>
  <div
    class="mt-16 lg:mt-24 relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
  >
    <div>
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
      >
        {{ title }}
      </h2>
      <p class="mt-3 text-xl text-gray-500 sm:mt-4">
        {{ description }}
      </p>
    </div>
    <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>

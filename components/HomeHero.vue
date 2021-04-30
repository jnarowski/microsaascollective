<template>
  <!-- HERO !-->
  <div class="relative bg-gray-50 overflow-hidden border-b border-gray-100">
    <div class="relative pb-16 sm:pb-24">
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <img
            v-if="false"
            class="h-20 w-auto sm:h-15"
            src="~assets/img/logo-large.png"
          />
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Micro-SaaS</span>
            <span class="block text-blue-ribbon-600 xl:inline">Collective</span>
          </h1>
          <p class="text-2xl mt-3 max-w-md mx-auto text-gray-700">
            Build cool shit with smart people
          </p>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            We are an experienced collective of innovators and entrepreneurs,
            combining our resources to create new products. Skip the awkward
            co-founder dating phase and build something revolutionary with
            people you trust.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-ribbon-600 hover:bg-blue-ribbon-700 md:py-4 md:text-lg md:px-10"
                @click.prevent="$emit('join')"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <!-- END HERO !-->
</template>

<script>
export default {}
</script>

<style></style>

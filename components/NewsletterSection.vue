<template>
  <section class="newsletter">
    <div class="bg-white py-16 sm:py-16">
      <div class="relative sm:py-16">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div
            class="relative rounded-2xl px-6 py-10 bg-blue-600 overflow-hidden shadow-xl sm:px-12 sm:py-20"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                class="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  class="text-blue-ribbon-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  class="text-blue-ribbon-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <h2
                  class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"
                >
                  Get notified when we&rsquo;re launching.
                </h2>
                <p
                  v-if="false"
                  class="mt-6 mx-auto max-w-2xl text-lg text-blue-ribbon-200"
                >
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                </p>
              </div>
              <form
                class="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                @submit.prevent="handleSubmit"
              >
                <div class="min-w-0 flex-1">
                  <label for="cta_email" class="sr-only">Email address</label>
                  <input
                    id="cta_email"
                    v-model="form.email"
                    type="email"
                    class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-arapawa-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    class="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-500 text-base font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-arapawa-600 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    form: { email: null },
  }),
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.$post('/api/v1/newsletter_subscriptions.json', {
          subscriber: this.form,
        })
        this.form.email = null
        this.$toast.notifySuccess({
          message: 'You have been successfully added to our newsletter.',
        })
      } catch (err) {
        this.error = err
      }
    },
  },
}
</script>

<style></style>

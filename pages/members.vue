<template>
  <div>
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Members
            </span>
          </h1>

          <div class="bg-robins-egg-blue-700 rounded-lg mt-16">
            <div
              class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
            >
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Join Us!</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-robins-egg-blue-200">
                This is a members only area. Please apply to join our community.
              </p>
              <a
                href="#"
                class="mt-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-robins-egg-blue-600 bg-white hover:bg-robins-egg-blue-50"
                @click.prevent="showModal = true"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <signup-modal
      v-if="showModal"
      :shown="showModal"
      @close="showModal = false"
      @save="handleSignupSave"
    />
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => ({
    showModal: false,
  }),
  head() {
    return {
      title: 'Our Members | Micro-SaaS Collective',
      description: 'A list of all of our members.',
    }
  },
  methods: {
    handleSignupSave() {
      this.showModal = false
      this.$toast.notify({
        message:
          "Your application was successfully sent. We'll be in touch in a few days.",
        type: 'success',
      })
    },
  },
}
</script>

<style></style>

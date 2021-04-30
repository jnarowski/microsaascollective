<template>
  <base-modal
    :shown="shown"
    v-bind="$attrs"
    @show="onShow"
    @close="$emit('close')"
  >
    <div class="overflow-hidden">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Apply Now
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            We'll be in touch within a few business days once we review your
            application.
          </p>
        </div>
        <div class="mt-12">
          <formulate-form
            name="signup"
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            @submit="handleSubmit"
          >
            <div>
              <label for="first_name" class="form-label">First name</label>
              <div class="mt-1">
                <input
                  id="first_name"
                  v-model="form.first_name"
                  type="text"
                  name="first_name"
                  autocomplete="given-name"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-arapawa-500 focus:border-arapawa-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label for="last_name" class="form-label">Last name</label>
              <div class="mt-1">
                <input
                  id="last_name"
                  v-model="form.last_name"
                  type="text"
                  name="last_name"
                  autocomplete="family-name"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-arapawa-500 focus:border-arapawa-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="mt-1">
                <formulate-input
                  v-model="form.email"
                  label-is-invalid-class="my-valid-class"
                  type="email"
                  name="email"
                  label="Email"
                  label-has-errors-class="text-red-600"
                  input-has-errors-class="border-red-300"
                  autocomplete="email"
                  input-class="py-3 px-4 block w-full shadow-sm focus:ring-arapawa-500 focus:border-arapawa-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="linkedin" class="form-label">Linkedin</label>
              <div class="mt-1">
                <input
                  id="linkedin"
                  v-model="form.linkedin"
                  name="linkedin"
                  type="text"
                  autocomplete="linkedin"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-arapawa-500 focus:border-arapawa-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="linkedin" class="form-label">
                Tell us a bit about yourself
              </label>
              <div class="mt-1">
                <textarea
                  id="bio"
                  v-model="form.bio"
                  name="bio"
                  type="text"
                  autocomplete="linkedin"
                  class="form-textarea py-3 px-4 block w-full shadow-sm focus:ring-arapawa-500 focus:border-arapawa-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div v-if="false" class="sm:col-span-2">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <!-- Enabled: "bg-arapawa-600", Not Enabled: "bg-gray-200" -->
                  <button
                    type="button"
                    class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arapawa-500"
                    aria-pressed="false"
                  >
                    <span class="sr-only">Agree to policies</span>
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span
                      aria-hidden="true"
                      class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </div>
                <div class="ml-3">
                  <p class="text-base text-gray-500">
                    By selecting this, you agree to the
                    <a href="#" class="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>
                    and
                    <a href="#" class="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <base-button
                color="arapawa"
                class="w-full items-center justify-center"
                size="xl"
                type="submit"
                :loading="saving"
              >
                Submit
              </base-button>
            </div>
          </formulate-form>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<script>
import BaseModal from '~/components/BaseModal'

const FORM_DEFAULT = {
  first_name: null,
  last_name: null,
  email: null,
  linkedin: null,
  bio: null,
}

export default {
  components: {
    BaseModal,
  },
  props: {
    shown: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    saving: false,
    form: { ...FORM_DEFAULT },
  }),
  methods: {
    async handleSubmit() {
      try {
        this.saving = true
        const response = await this.$axios.$post('/users', { user: this.form })
        this.$emit('save', response)

        this.$toast.notify({
          message:
            "Your application was successfully sent. We'll be in touch in a few days.",
          type: 'success',
        })

        this.saving = false
      } catch (err) {
        this.$formulate.handle(err, 'signup')
        this.saving = false
        this.error = err
      }
    },
    onShow() {
      this.form = { ...FORM_DEFAULT }
    },
  },
}
</script>

<style></style>

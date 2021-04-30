<template>
  <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav class="space-y-1">
          <a
            href="#"
            class="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          >
            <base-icon
              outline
              icon="user-circle"
              class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            />
            <span class="truncate">Profile</span>
          </a>
        </nav>
      </aside>

      <!-- Payment details -->
      <base-card class="lg:col-span-9">
        <formulate-form
          class="divide-y divide-gray-200"
          name="form"
          @submit="handleSubmit"
        >
          <!-- Profile section -->
          <div class="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Profile
              </h2>
              <p class="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div class="mt-6 flex flex-col lg:flex-row">
              <div class="flex-grow space-y-6">
                <formulate-input
                  v-model="form.slug"
                  name="slug"
                  autocomplete="slug"
                  label="Username"
                  label-has-errors-class="text-red-600"
                  input-has-errors-class="border-red-300"
                  element-class="flex"
                  input-class="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                >
                  <template #prefix>
                    <span
                      class="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm"
                    >
                      www.microsaas.com/members
                    </span>
                  </template>
                </formulate-input>
                <formulate-input
                  v-model="form.bio"
                  label="About"
                  type="textarea"
                  help="Brief description for your profile. URLs are hyperlinked."
                  help-class="mt-2 text-sm text-gray-500"
                  label-class="block text-sm font-medium text-gray-700"
                  outer-class="col-span-12 sm:col-span-6"
                  input-class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div
                class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
              >
                <p class="text-sm font-medium text-gray-700" aria-hidden="true">
                  Photo
                </p>
                <avatar-uploader
                  class="mt-1"
                  :saving="savingAvatar"
                  :avatar-url="avatarUrl"
                  @change="handleAvatarChange"
                />
              </div>
            </div>

            <div class="mt-6 grid grid-cols-12 gap-6">
              <formulate-input
                v-model="form.first_name"
                label="First name"
                validation="required"
                label-has-errors-class="text-red-600"
                input-has-errors-class="border-red-300"
                label-class="block text-sm font-medium text-gray-700"
                outer-class="col-span-12 sm:col-span-6"
                input-class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <formulate-input
                v-model="form.last_name"
                label="Last name"
                label-has-errors-class="text-red-600"
                input-has-errors-class="border-red-300"
                label-class="block text-sm font-medium text-gray-700"
                outer-class="col-span-12 sm:col-span-6"
                input-class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <formulate-input
                v-model="form.email"
                label="Email"
                name="email"
                type="email"
                validation="required"
                label-has-errors-class="text-red-600"
                input-has-errors-class="border-red-300"
                label-class="block text-sm font-medium text-gray-700"
                outer-class="col-span-12 sm:col-span-6"
                input-class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <formulate-input
                v-model="form.linkedin"
                label="Linkedin"
                label-has-errors-class="text-red-600"
                input-has-errors-class="border-red-300"
                label-class="block text-sm font-medium text-gray-700"
                outer-class="col-span-12 sm:col-span-6"
                input-class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div class="mt-4 py-4 px-4 pb-0 flex justify-end sm:px-6">
            <base-button class="ml-5" :loading="submitting">Save</base-button>
          </div>
        </formulate-form>
      </base-card>
    </div>
  </main>
</template>

<script>
import buildServerUrl from '~/utils/buildServerUrl'

export default {
  layout: 'app',
  data() {
    const user = this.$auth.user

    return {
      submitting: false,
      savingAvatar: false,
      form: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        linkedin: user.linkedin,
        password: '',
        slug: user.slug,
      },
    }
  },
  computed: {
    avatarUrl() {
      return buildServerUrl(this.$auth.user.avatar_thumb_url)
    },
  },
  methods: {
    async handleAvatarChange({ file }) {
      this.savingAvatar = true
      const formData = new FormData()
      formData.append('profile[avatar]', file)

      const response = await this.$axios.put(
        `/api/v1/profile/${this.$auth.user.id}.json`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )

      this.$auth.setUser(response.data.user)
      this.savingAvatar = false
    },
    async handleSubmit() {
      try {
        this.submitting = true
        const response = await this.$axios.put(
          `/api/v1/profile/${this.$auth.user.id}.json`,
          {
            profile: this.form,
          }
        )
        this.$auth.setUser(response.data.user)
        this.$toast.notifySuccess({
          message: 'Your profile has been successfully updated.',
        })
        this.submitting = false
      } catch (err) {
        this.$formulate.handle(err, 'form')
        this.submitting = false
      }
    },
  },
}
</script>

<style></style>

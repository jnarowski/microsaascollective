<template>
  <div>
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden"
        aria-hidden="true"
      ></div>
    </transition>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="show"
        class="z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top lg:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200"
        >
          <div class="pt-3 pb-2">
            <div class="flex items-center justify-between px-4">
              <div>
                <img
                  class="h-8 w-auto"
                  src="~assets/img/logo-large.png"
                  alt="Micro-SaaS Collective"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  @click="$emit('close')"
                >
                  <span class="sr-only">Close menu</span>
                  <base-icon outline icon="x" class="h-6 w-6" />
                </button>
              </div>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <nuxt-link
                to="/members"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                @click.native="$emit('close')"
              >
                Members
              </nuxt-link>
              <nuxt-link
                to="/projects"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                @click.native="$emit('close')"
              >
                Projects
              </nuxt-link>
              <nuxt-link
                to="/resources"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                @click.native="$emit('close')"
              >
                Resources
              </nuxt-link>
              <nuxt-link
                to="/auth/login"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                @click.native="$emit('close')"
              >
                Sign in
              </nuxt-link>
            </div>
          </div>
          <div v-if="$auth.loggedIn" class="pt-4 pb-2">
            <div class="flex items-center px-5">
              <base-avatar
                class="h-10 w-10 rounded-full"
                :image="user.avatarThumb"
              />
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">
                  {{ user.first_name }} {{ user.last_name }}
                </div>
                <div class="text-sm font-medium text-gray-500">
                  {{ user.email }}
                </div>
              </div>
              <button
                v-if="false"
                class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span class="sr-only">View notifications</span>
                <base-icon outline icon="bell" class="h-6 w-6" />
              </button>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <a
                v-if="false"
                href="#"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
              >
                Your Profile
              </a>
              <a
                v-if="false"
                href="#"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
              >
                Settings
              </a>
              <a
                v-if="false"
                href="#"
                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                @click="$emit('logout')"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>

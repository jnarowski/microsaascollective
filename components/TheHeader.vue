<template>
  <div class="relative">
    <div class="relative z-20 bg-white shadow">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
      >
        <div>
          <nuxt-link to="/" class="flex">
            <span class="sr-only">Micro-Saas Collective</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="~assets/img/logo-large.png"
              alt=""
            />
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span class="sr-only">Open menu</span>
            <base-icon outline icon="menu" class="h-6 w-6" />
          </button>
        </div>
        <div
          class="hidden md:flex-1 md:flex md:items-center md:justify-between"
        >
          <nav class="flex space-x-10">
            <nuxt-link
              v-if="false"
              to="/members"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Members
            </nuxt-link>
            <div v-if="false" class="relative">
              <button
                type="button"
                class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="showProjects = !showProjects"
              >
                <span>Members</span>
                <base-icon
                  v-if="false"
                  icon="chevron-down"
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                />
              </button>
            </div>
            <nuxt-link
              v-if="$auth.loggedIn"
              to="/projects"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </nuxt-link>
            <nuxt-link
              to="/resources"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Resources
            </nuxt-link>
          </nav>
          <div
            v-if="$auth.loggedIn && 1 == 2"
            class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
          >
            <base-search class="max-w-lg w-full lg:max-w-xs" />
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <base-icon outline icon="menu" class="block h-6 w-6" />
              <base-icon outline icon="x" class="hidden h-6 w-6" />
            </button>
          </div>
          <header-avatar-menu
            v-if="$auth.loggedIn"
            :user="user"
            @logout="handleLogout"
          />
          <div v-if="!$auth.loggedIn" class="flex items-center md:ml-12">
            <a
              href="#"
              class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              @click.prevent="showSignupModal = true"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu !-->
    <header-mobile-menu
      :show="showMobileMenu"
      :user="user"
      @close="showMobileMenu = false"
      @logout="handleLogout"
    />
    <!-- END Mobile Menu !-->

    <!-- Project Menu - NOT IN USE JUST AN EXAMPLE !-->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <header-projects-menu v-if="showProjects" />
    </transition>
    <!-- END Project Menu !-->

    <signup-modal
      v-if="showSignupModal"
      :shown="showSignupModal"
      @close="showSignupModal = false"
      @save="showSignupModal = false"
    />
  </div>
</template>

<script>
import buildServerUrl from '~/utils/buildServerUrl'

export default {
  data: () => ({
    showSignupModal: false,
    showMobileMenu: false,
    showProjects: false,
  }),
  computed: {
    user() {
      if (!this.$auth.user) {
        return {}
      }

      return {
        id: this.$auth.user,
        name: `${this.$auth.user.first_name} ${this.$auth.user.last_name}`,
        email: this.$auth.user.email,
        avatarThumb: buildServerUrl(this.$auth.user.avatar_thumb_url),
      }
    },
  },
  methods: {
    handleLogout() {
      this.$auth.logout()
    },
  },
}
</script>

<style></style>

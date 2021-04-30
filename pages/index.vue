<template>
  <div>
    <home-hero @join="showModal = true" />
    <newsletter-section />
    <blog-section v-if="false" :posts="posts" />
    <signup-modal
      v-if="showModal"
      size="sm"
      :shown="showModal"
      @close="showModal = false"
      @save="handleSignupSave"
    />
  </div>
</template>

<script>
export default {
  auth: false,
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContentResponse = await $prismic.api.getSingle('homepage')
      const homepageContent = (homepageContentResponse || {}).data

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        {
          fetchLinks: ['author.name', 'author.avatar'],
          orderings: '[my.post.date desc]',
        }
      )

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data: () => ({
    showModal: false,
    showModall: false,
  }),
  head() {
    return {
      title:
        'Micro-SaaS Collective - A Micro-Saas Community of people, resources, tools and ideas.',
    }
  },
  methods: {
    handleSignupSave() {
      this.showModal = false
    },
  },
}
</script>

<style lang="sass" scoped></style>

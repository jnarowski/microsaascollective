<template>
  <div>
    <div>
      <a href="#" class="inline-block">
        <span
          :class="typeBoxClass"
          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
        >
          {{ typeName }}
        </span>
      </a>
    </div>
    <a :href="url" target="_BLANK" class="block mt-4">
      <p class="text-xl font-semibold text-gray-900">
        {{ title }}
      </p>
      <p class="mt-3 text-base text-gray-500">
        {{ description }}
      </p>
    </a>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a v-if="author.url" :href="author.url">
          <span class="sr-only">{{ author.name }}</span>
          <img
            class="border-gray-100 border h-10 w-10 rounded-full"
            :src="author.image"
            alt=""
          />
        </a>
        <template v-if="!author.url">
          <span class="sr-only">{{ author.name }}</span>
          <img
            class="border border-gray-100 h-10 w-10 rounded-full"
            :src="author.image"
            alt=""
          />
        </template>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <template v-if="author.url" :href="author.url">
            <a :href="author.url">{{ author.name }}</a>
          </template>
          <template v-if="!author.url">{{ author.name }}</template>
          <span
            v-if="author.verified"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
          >
            Member
          </span>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <div>{{ authorUrlFormatted }}</div>
          <time v-if="false" datetime="2020-03-16">Mar 16, 2020</time>
          <span v-if="false" aria-hidden="true">&middot;</span>
          <span v-if="false">6 min read</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const types = {
  article: {
    name: 'Article',
    boxClass: 'bg-robins-egg-blue-100 text-robins-egg-blue-800',
  },
  community: {
    name: 'Community',
    boxClass: 'bg-gray-100 text-gray-800',
  },
  forum: {
    name: 'Forum',
    boxClass: 'bg-gray-100 text-gray-800',
  },
  conference: {
    name: 'Conference',
    boxClass: 'bg-gray-100 text-gray-800',
  },
  video: {
    name: 'Video',
    boxClass: 'bg-pink-100 text-pink-800',
  },
  book: {
    name: 'Book',
    boxClass: 'bg-blue-ribbon-100 text-blue-ribbon-800',
  },
  ebook: {
    name: 'Ebook',
    boxClass: 'bg-arapawa-100 text-arapawa-800',
  },
  newsletter: {
    name: 'Newsletter',
    boxClass: 'bg-robins-egg-blue-100 text-robins-egg-blue-800',
  },
}

export default {
  props: {
    author: {
      type: Object,
      default: () => {},
    },
    authorImage: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    authorUrlFormatted() {
      return (this.author.url || '')
        .replace(/^(https?):\/\//, '')
        .replace(/\/$/, '')
        .replace(/^www\./, '')
    },
    typeDetails() {
      return types[this.type] || {}
    },
    typeName() {
      return this.typeDetails.name
    },
    typeBoxClass() {
      return this.typeDetails.boxClass
    },
  },
}
</script>

<style></style>

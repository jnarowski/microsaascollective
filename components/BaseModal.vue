<template>
  <div class="fixed z-20 inset-0 overflow-y-auto">
    <transition name="fade" @after-enter="showContent = true">
      <div
        v-if="shown"
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="showContent"
            aria-hidden="true"
            class="fixed inset-0 transition-opacity"
          >
            <div
              class="absolute inset-0 bg-gray-500 opacity-75"
              @click="handleClose"
            ></div>
          </div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          @after-leave="$emit('close')"
        >
          <div
            v-if="showContent"
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full"
            :class="[sizeClass]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <slot name="header">
              <base-modal-header
                v-if="title"
                :title="title"
                @close="handleClose"
              />
            </slot>
            <div :class="paddingClass"><slot /></div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
const sizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  'full',
  'min',
  'max',
]

const sizeChart = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
  min: 'max-w-min',
  max: 'max-w-max',
}

export default {
  props: {
    bodyPadding: {
      default: true,
      type: Boolean,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (value) => sizes.includes(value),
    },
    title: {
      type: String,
      default: null,
    },
    shown: {
      required: true,
      type: Boolean,
    },
  },
  data: () => ({
    showContent: false,
  }),
  computed: {
    paddingClass() {
      if (!this.bodyPadding) {
        return ''
      }

      return 'px-4 pt-5 pb-4 sm:p-6'
    },
    sizeClass() {
      return sizeChart[this.size] || ''
    },
  },
  watch: {
    shown(newValue, oldValue) {
      if (newValue === true) {
        this.$emit('show')
      }
    },
  },
  mounted() {
    this.showContent = true
    this.$bus.$emit('modal-open')
  },
  methods: {
    handleClose() {
      this.showContent = false
      this.$bus.$emit('modal-close')
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

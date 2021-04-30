<template>
  <component :is="currentTabComponent" :icon="icon" />
</template>

<script>
import * as solidIcons from '@vue-hero-icons/solid'
import * as outlineIcons from '@vue-hero-icons/outline'
import underscoreToPascal from '~/utils/underscoreToPascal'
import IconSvg from '~/components/IconSvg'

export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentTabComponent() {
      const iconName = underscoreToPascal(this.icon) + 'Icon'

      if (this.outline) {
        // eslint-disable-next-line import/namespace
        return outlineIcons[iconName]
      }

      // eslint-disable-next-line import/namespace
      const IconComponent = solidIcons[iconName]

      if (IconComponent) {
        return IconComponent
      }

      return IconSvg
    },
  },
}
</script>

<style></style>

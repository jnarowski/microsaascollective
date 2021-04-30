import Vue from 'vue'

export default function ({ store }) {
  const EventBus = new Vue()

  // GLOBAL MESSAGE BUS
  const VueBus = {
    install(Vue, options) {
      Vue.prototype.$bus = EventBus
    },
  }

  Vue.use(VueBus)
}

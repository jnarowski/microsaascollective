import Vue from 'vue'

const generateUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const TailwindToast = {
  install(Vue, options) {
    const messages = []
    const vm = new Vue({ data: { messages } })

    const addMessage = (options) => {
      vm.messages.push(options)
    }

    const removeMessage = ({ id }) => {
      vm.messages = vm.messages.filter((message) => message.id !== id)
    }

    const removeMessageOnDelay = ({ id, duration }) => {
      setTimeout(() => removeMessage({ id }), duration)
    }

    const notify = ({ title, message, type = 'success', duration = 3000 }) => {
      const id = generateUuid()

      addMessage({ id, title, message, type })
      removeMessageOnDelay({ id, duration })
    }

    Vue.prototype.$toast = {
      close({ id }) {
        removeMessage({ id })
      },
      notify,
      notifySuccess: (options) => notify({ ...options, type: 'success' }),
      notifyError: (options) => notify({ ...options, type: 'error' }),
      data: vm,
    }
  },
}

Vue.use(TailwindToast)

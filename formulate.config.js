export default {
  errorHandler(err) {
    // eslint-disable-next-line no-console
    console.log('[ERROR]', err)

    let inputErrors = []
    let data = {}
    const formErrors = []

    if (err.response && err.response.data) {
      data = err.response.data
    }

    if (data.errors) {
      inputErrors = data.errors
    }

    if (data.error) {
      formErrors.push(data.error_message)
    }

    return {
      inputErrors,
      formErrors,
    }
  },
  classes: {
    label: 'font-medium text-sm',
    help: 'text-xs mt-1 text-gray-600',
    error: 'text-red-700 text-xs mb-1',
  },
}

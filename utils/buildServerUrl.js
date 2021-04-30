export default (path = '') => {
  if (path === null) {
    return ''
  }

  return `${process.env.API_URL}${path}`
}

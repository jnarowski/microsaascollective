import deepCopy from '~/utils/deepCopy'

const getId = (id, key, item) => {
  if (id) {
    return id
  }
  if (!id && item[key]) {
    return item[key]
  }

  return null
}

const arrayAppend = (array, item) => {
  array.splice(array.length, 0, item)
  return array
}

export default ({ array = [], id = null, item = {}, key = 'id' }) => {
  // makes sure we're returning a new array for vuex and such
  const newArray = deepCopy(array)

  const itemId = getId(id, key, item)

  if (!itemId) {
    return arrayAppend(newArray, item)
  }

  const index = newArray.findIndex((r) => r[key] === itemId)
  const value = newArray.find((r) => r[key] === itemId)

  if (index >= 0 && value) {
    const newValue = Object.assign({}, value, item)
    newArray.splice(index, 1, newValue)
  }

  return newArray
}

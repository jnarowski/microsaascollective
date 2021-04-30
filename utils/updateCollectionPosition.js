import deepCopy from '~/utils/deepCopy'

export default (array, ids = []) => {
  const newArray = deepCopy(array)

  // eslint-disable-next-line array-callback-return
  newArray.map((item) => {
    console.log(ids, item.id, 'doooo')
    const index = ids.indexOf(item.id)
    if (index !== -1) {
      item.position = index
    }
  })

  return newArray
}

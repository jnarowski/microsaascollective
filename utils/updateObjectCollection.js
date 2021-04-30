export default ({ object = {}, id = null, item = {}, key = 'id' }) => {
  return {
    ...object,
    [id]: {
      ...object[id],
      ...item,
    },
  }
}

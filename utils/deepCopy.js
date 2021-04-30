export default (objectOrArray) => {
  return JSON.parse(JSON.stringify(objectOrArray))
}

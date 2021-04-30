export default ({ file }) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('[ERROR] file is null'))
    }

    const reader = new FileReader()

    reader.onload = function (e) {
      resolve(e.target.result)
    }

    reader.readAsDataURL(file)
  })
}

export default ({ base64, fileName, fileType }) => {
  if (!base64) {
    // eslint-disable-next-line no-console
    console.log('base64 string cant be null')
    return null
  }

  const binStr = atob(base64.split(',')[1])
  const arr = new Uint8Array(binStr.length)
  for (let i = 0; i < binStr.length; i++) {
    arr[i] = binStr.charCodeAt(i)
  }

  return new File([arr], fileName, { type: fileType })
}

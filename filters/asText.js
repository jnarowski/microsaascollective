import { RichText } from 'prismic-dom'

export default (text) => {
  if (!text) {
    return
  }

  return RichText.asText(text)
}

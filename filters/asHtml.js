import { RichText } from 'prismic-dom'

export default (content) => {
  if (!content) {
    return
  }

  return RichText.asHtml(content)
}

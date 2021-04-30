import { Link } from 'prismic-dom'
import linkResolver from '../plugins/link-resolver'

export default (link) => {
  if (!link) {
    return
  }

  return Link.url(link, linkResolver)
}

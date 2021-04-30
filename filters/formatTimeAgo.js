import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default (date) => {
  if (date === null || date === '') {
    return ''
  }

  return dayjs(date).fromNow().toLowerCase()
}

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default (date) => {
  return dayjs(date).fromNow().toLowerCase()
}

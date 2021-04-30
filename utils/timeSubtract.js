import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default ({ date, number, interval }) => {
  return dayjs(date).subtract(number, 'year')
}

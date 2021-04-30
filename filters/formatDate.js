import dayjs from 'dayjs'

// https://day.js.org/docs/en/display/format
export default (date, format = 'MMMM D YYYY [at] h:mm') => {
  return dayjs(date).format(format)
}

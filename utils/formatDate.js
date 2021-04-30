import dayjs from 'dayjs'

export default (date, format = 'MM/DD/YYYY') => {
  return dayjs(date).format(format)
}

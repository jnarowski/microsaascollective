export default ({ total = 0, count = 0 }) => {
  if (!count || !total) {
    return 0
  }

  const percent = (count / total) * 100

  return Math.round(percent)
}

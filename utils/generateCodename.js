import generator from 'codename-gen'
import titleize from './titleize'

export default () => {
  const codename = generator.gen([
    generator.wordListRepoType.MGSFIRSTNAME,
    generator.wordListRepoType.MGSLASTNAME,
  ])

  return titleize(codename)
}

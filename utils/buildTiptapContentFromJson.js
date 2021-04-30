const buildTextFromNode = (node, index) => {
  let text = []

  if (!node.content) {
    return {}
  }

  node.content.forEach((item) => {
    if (item.content && item.content.length > 0) {
      const textFragments = item.content.map((child) => child.text)
      text = text.concat(textFragments)
    } else {
      text.push(item.text)
    }
  })

  return {
    index,
    content: text.join(' '),
  }
}

export default ({ type, json }) => {
  const nodes = json.content.filter((item) => item.type === type)
  return nodes.map(buildTextFromNode)
}

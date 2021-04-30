const filterEmpty = (arr) => {
  const newArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') newArr.push(arr.pop())
    else arr.pop()
  }

  return newArr.reverse()
}

export default (input) => {
  const newInput = filterEmpty(input.split('\n')).join('</p><p>')
  return '<p>' + newInput + '</p>'
}

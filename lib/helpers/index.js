function capitalize(phrase) {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function removeWhitespaces(str) {
  return str.replace(/\s/g, '')
}

function toLowerCaseFirst(str){
  return str.charAt(0).toLowerCase() + str.slice(1)
}

module.exports = {
  capitalize,
  removeWhitespaces,
  toLowerCaseFirst
}

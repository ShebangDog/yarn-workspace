const createList = (length, generator) => [...Array(length)]
  .map((_, index) => index)
  .map(generator)

module.exports = {
  createList,
}

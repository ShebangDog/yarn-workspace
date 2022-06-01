const { createList } = require("@workspace/common/List")

const ListComponent = (props) => {
  const {length, value} = props

  const DivWrapper = (value) => `<div>${value}</div>>`

  return createList(length, _ => value).map(DivWrapper)
}

const component = ListComponent({length: 4, value: "sssss"})

console.log(component)
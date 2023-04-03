const grandParentEle = document.getElementById('grandparent')
const parentEle = document.getElementById('parent')
const childEle = document.getElementById('child')


const inputEle = document.getElementById('name-input')

const formEle = document.getElementById('user-form')
const anchorEle = document.getElementById('anchor-tag') //only one element that first matches

const boxElements = document.getElementsByClassName('box') //Collection of HTML Elements
console.log("Class", boxElements)

const tagElements = document.getElementsByTagName('div') //Collection of HTML Elements
console.log("Tag", tagElements)

grandParentEle.addEventListener('click', function (event) {
  console.log("Grandparent Element is clicked")
  event.stopPropagation()
})

parentEle.addEventListener('click', function (event) {
  console.log("Parent Element is clicked")
  event.stopPropagation()
})

childEle.addEventListener('click', function (event) {
  // console.log(event)
  console.log("Child Element is clicked")
  event.stopPropagation()
})

document.addEventListener('click', function () {
  console.log("Document Element is clicked")
})

// inputEle.addEventListener('keydown', function (event) {
//   console.log("Input Element keydown event is triggered")
//   console.log(event)
// })

// inputEle.addEventListener('keyup', function (event) {
//   console.log("Input Element keyup event is triggered")
//   console.log(event)
// })

formEle.addEventListener('submit', function (event) {
  console.log("Form Submit Event Trigered");
  event.preventDefault()
  const userName = inputEle.value; //''

  // console.log(userName)
  alert(`Welcome ${userName}`) //''
})

// Do not do this
// anchorEle.addEventListener('click', function (event) {
//   event.preventDefault()
// })
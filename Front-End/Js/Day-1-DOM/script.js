console.log("Script File is linked")

// window.document.body.style.backgroundColor = 'green'

const clickBtnElement = window.document.getElementById('click-me-btn')
const bodyElement = document.body
// console.log(clickBtnElement)


//.addEventListener('eventName', function to execute when the event occurs)
clickBtnElement.addEventListener('click', clickBtnEventListener)

clickBtnElement.addEventListener('mouseenter', function () {
  console.log("MouseEnter Event trigerred")
})

clickBtnElement.addEventListener('mouseleave', function () {
  console.log("MouseLeave Event trigerred")
})

function clickBtnEventListener() {
  // console.log("Button is clicked!")

  // 1. Create Div Element - <div>Hello</div>
  const divElement = document.createElement('div'); //<div></div>
  divElement.innerText = 'Hello' //<div>Hello</div>

  //2. Insert the created Element inside dom
  bodyElement.append(divElement) //<body><div>Hello</div></body>
}
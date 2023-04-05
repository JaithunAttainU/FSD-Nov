const getUserBtnElement = document.getElementById('get-users-btn')
const dataElement = document.getElementById('data')

getUserBtnElement.addEventListener('click', () => {

  //Make a api call to get the list of users
  const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users') //make the req
  fetchPromise.then(onFulfill, onReject).then((data) => { console.log(data) }, () => console.log("Error converting stream to data"))

})


function onFulfill(responseObj) {
  console.log("Promise Fulfilled", responseObj)

  //Converting stream from body to actual data
  // const actualDataPromise = responseObj.json()
  // actualDataPromise.then((data) => { console.log(data) })

  return responseObj.json()
}


function onReject(rejectObj) {
  //display Error msg in UI
  dataElement.innerText = " Error fetching data from URL"
}
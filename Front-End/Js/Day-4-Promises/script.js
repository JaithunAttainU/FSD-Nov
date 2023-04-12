const getUserBtnElement = document.getElementById('get-users-btn')
const dataElement = document.getElementById('data')

getUserBtnElement.addEventListener('click', getUsersClickListener)

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

function getUsersClickListener(event) {
  //Make a api call to get the list of users
  const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users') //make the req
  fetchPromise.then(onFulfill, onReject).then((data) => {
    console.log(data)

    for (let index = 0; index < data.length; index++) {
      const userDetails = data[index];

      // userDetails.address.geo = undefined;

      const lat = userDetails.address.geo.lat
      const lng = userDetails.address.geo.lng

      const userDetailsElement = `
        <div>UserName: ${userDetails.username}</div>
        <div>Phone: ${userDetails.phone}</div>
        <div>Lat: ${lat}</div>
        <div>Lng: ${lng}</div>
        <br/>
      `
      dataElement.innerHTML = dataElement.innerHTML + userDetailsElement
    }

  }, () => console.log("Error converting stream to data")).catch((err) => {
    dataElement.innerText = "Some error happened. Please try again! "
    console.log(err)
  })
}

async function getUsersClickListenerAsyncAwait() {

  try {
    const responseObj = await fetch('https://api.unsplash.com/photos', {
      method: 'GET',
      headers: {
        // "Accept": "application/json",
        "Authorization": "Client-ID hLmVINqlRfkS_LLQ-cwCuXqawI_pxJDJY4WrRXqr5bk"
      }
    }) //make the req
    const data = await responseObj.json()

    console.log(data)
    // dataElement.innerHTML = data.joke

    // for (let index = 0; index < data.length; index++) {
    //   const userDetails = data[index];

    //   userDetails.address.geo = undefined;

    //   const lat = userDetails.address.geo.lat
    //   const lng = userDetails.address.geo.lng

    //   const userDetailsElement = `
    //     <div>UserName: ${userDetails.username}</div>
    //     <div>Phone: ${userDetails.phone}</div>
    //     <div>Lat: ${lat}</div>
    //     <div>Lng: ${lng}</div>
    //     <br/>
    //   `
    //   dataElement.innerHTML = dataElement.innerHTML + userDetailsElement
    // }

    for (let index = 0; index < data.length; index++) {
      const imgDetails = data[index];

      const imgElement = `
        <img src=${imgDetails.urls.small} alt=${imgDetails.alt_description}/>
      `
      dataElement.innerHTML = dataElement.innerHTML + imgElement

    }
  } catch (error) {
    dataElement.innerText = "Some error happened. Please try again! "
    console.log(error)
  }
}



// .then
// .catch


// async / await - syntactic sugars for promises

// Promise.then(funfullindFunc, RejectedFunc).then(funfullindFunc, RejectedFunc).catch(ErrorCatchFun)


// Https Verb / Methods

// GET - get data from server
// POST - give new data to the server
// PUT - change the data in the server
// DELETE - delete the data in the server
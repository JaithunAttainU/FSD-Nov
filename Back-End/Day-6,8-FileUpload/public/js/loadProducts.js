const productsCardDiv = document.querySelector('#products');

async function loadProducts() {
  const response = await fetch('/products')
  const productsData = await response.json()
  for (let index = 0; index < productsData.length; index++) {
    const { imageUrls, productName, productPrice, productDesc } = productsData[index];
    let imageUrl = ''
    if (imageUrls.length > 0) {
      imageUrl = imageUrls[0]
    }

    const cardEle = `<div class="card" style="width: 18rem;">
    <img src=${imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${productName}</h4>
      <h6 class="card-title">${productPrice}</h6>
      <p class="card-text">${productDesc}</p>
    </div>
   </div>`

    productsCardDiv.innerHTML = productsCardDiv.innerHTML + cardEle
  }
}

loadProducts()
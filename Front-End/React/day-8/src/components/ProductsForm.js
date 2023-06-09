import React from 'react'

function ProductsForm() {

  const [productName, setProductName] = useSessionStorage('productName')
  const [category, setCategory] = useSessionStorage('category')


  return (
    <div>
      <input type='text' placeholder='Enter ProductName' value={productName} onChange={(event) => {
        setProductName(event.target.value)
      }} />
      <input type='text' placeholder='Enter Category' value={category} onChange={(event) => {
        setCategory(event.target.value)
      }} />

    </div>
  )
}

export default ProductsForm
const express = require('express')
const multer = require('multer')

const app = express()

const multerUpload = multer({ dest: 'client-images' })

app.use(express.urlencoded())
app.use(express.json())

//Libraries to parse multipart/form-data
//multer
//express-fileupload
//multiparty

app.use(express.static('public'))

app.post('/products', multerUpload.single('productImage'), (request, response) => {
  const productData = request.body
  console.log(productData)
  response.end()
})

app.listen(8000, () => {
  console.log("Server started Sucessfuly")
})
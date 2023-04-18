const express = require('express')
const multer = require('multer')

const app = express()
const cloudinary = require('cloudinary').v2
const base64 = require('js-base64')

cloudinary.config({
  cloud_name: 'attainu-jaithun',
  api_key: 'dfgsdgsf',
  api_secret: 'fseg-fseg'
})

// const multerUpload = multer({ dest: 'client-images' })

//Two type of Storage - Disk, Memory
// const multerUpload = multer({
//   storage: multer.diskStorage({
//     destination: function (_req, _fileData, callback) {
//       return callback(/*new Error("Folder Not Found")*/null, 'client-images')
//     },
//     filename: function (req, fileData, callback) {
//       return callback(/*new Error("Error in generating file name")*/ null, `${Date.now()}-${fileData.originalname}`)
//     }
//   }),
//   limits: {
//     fileSize: 1000
//   }
// })

const multerUpload = multer({
  storage: multer.memoryStorage({})
})

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))

//Libraries to parse multipart/form-data
//multer
//express-fileupload
//multiparty

const products = []
app.post('/products', multerUpload.single('productImage'), async (request, response) => {

  try {
    const fileData = request.file
    let cloudinaryResponse;
    if (fileData) {
      //convert this buffer file content to base64
      const base64String = base64.encode(fileData.buffer)
      // console.log(base64String)
      cloudinaryResponse = await cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64String}`)
    }

    const productData = request.body
    productData.imageUrl = cloudinaryResponse ? cloudinaryResponse.url : ''
    products.push(productData)
    response.send({ status: 'success', msg: 'Product Added Successsfully!' })
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'Error adding product!' })
  }

})

app.get("/products", (req, res) => {
  res.send(products)
})

app.listen(8000, () => {
  console.log("Server started Sucessfuly")
})
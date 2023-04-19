const express = require('express')
const multer = require('multer')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const cloudinary = require('cloudinary').v2
const base64 = require('js-base64')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
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

const products = [{ "productName": "HeadPhone", "productDesc": "fgs", "productPrice": "56", "imageUrls": ["http://res.cloudinary.com/attainu-jaithun/image/upload/v1681921280/whvis5tdqajm1kcgsf0z.jpg"] }]
app.post('/products', multerUpload.array('productImage', 4), async (request, response) => {

  try {
    //req.file will have only single file data
    // const fileData = request.file

    const filesData = request.files
    console.log(filesData)

    let cloudinaryResponse;
    const imageUrls = []
    if (filesData.length != 0) {
      for (let index = 0; index < filesData.length; index++) {
        const fileInfo = filesData[index];
          //convert this buffer file content to base64
        const base64String = base64.encode(fileInfo.buffer)
          // console.log(base64String)
        cloudinaryResponse = await cloudinary.uploader.upload(`data:${fileInfo.mimetype};base64,${base64String}`)
        if (cloudinaryResponse.url) {
          imageUrls.push(cloudinaryResponse.url)
        }
      }
    }
    const productData = request.body
    productData.imageUrls = imageUrls
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
  console.log(process.env)
})
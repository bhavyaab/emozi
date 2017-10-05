const express =  require('express')
const multer  = require('multer')
const fs = require('fs')

const PORT = process.env.PORT || 8000
const app = express()

var folder = './src/images'
var upload = multer({ dest: folder })

app.use(express.static(`${__dirname}/src`))
app.post('/', upload.single(), function (req, res, next) {})

app.use('/allImages', function(req, res){
  var allImages = []
  fs.readdirSync(folder).forEach(file => {
    allImages.push(file)
  })
  res.send(allImages)
})

app.listen(PORT, () => {
  console.log('server up at PORT: ', PORT)
})

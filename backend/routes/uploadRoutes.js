import path from 'path'
import express from 'express'
import multer from 'multer'
import fs from 'fs'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

router.post('/base64', (req, res) => {
  //console.log(req.body.imgStr)
  let base64Image = req.body.imgStr //.split(';base64,').pop();

  const imageUrl = `uploads/image-${Date.now()}.jpg`
  fs.writeFile(imageUrl, base64Image, { encoding: 'base64' }, function (err) {
    console.log('File created');
    res.send(`/${imageUrl}`);
  });

})

export default router


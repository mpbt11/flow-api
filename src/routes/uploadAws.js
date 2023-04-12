const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = require('../utils/multerUtils');

const upload = multer({ storage });

const uploadAwsController = require('../controllers/uploadAwsController');

router.post('/', upload.single('file'), uploadAwsController.uploadAws);

module.exports = router;
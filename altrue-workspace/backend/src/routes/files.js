const express = require('express');
const multer = require('multer');
const { uploadFile, downloadFile } = require('../services/fileService');
const { validateFileUpload } = require('../middlewares/validate');

const router = express.Router();
const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } }); // 5 MB limit

// Route for file upload
router.post('/upload', upload.single('file'), validateFileUpload, uploadFile);

// Route for file download
router.get('/download/:fileId', downloadFile);

module.exports = router;
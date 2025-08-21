const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer
const upload = multer({ storage });

// Function to handle file uploads
const uploadFile = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: 'File upload failed', error: err.message });
    }
    return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  });
};

// Function to handle file retrieval
const getFile = (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', req.params.filename);
  res.download(filePath, (err) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }
  });
};

// Function to handle file deletion
const deleteFile = (req, res) => {
  const filePath = path.join(__dirname, '../../uploads', req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }
    return res.status(200).json({ message: 'File deleted successfully' });
  });
};

module.exports = {
  uploadFile,
  getFile,
  deleteFile,
};
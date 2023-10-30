const multer = require('multer');
const {extname} = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + Date.now() + extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

module.exports = {upload}
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

// app.post('/upload', (req, res) => {
//     console.log(req)
//     upload(req, res, (err) => {
//          const { files } = req.body;
//         if (err) {
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(files)
//     })
// });


app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        const { files } = req.body;
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(files)
    })
});
  

app.listen(3002, () => {
    console.log('App is running on port 3002')
});
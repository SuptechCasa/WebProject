const express = require('express')
const app = express()
const multer  = require("multer");
const path = require("path");
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static('uploads'));
const listProduits = []

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // dossier uploads
  },
  filename: (req, file, cb) => {
    cb(null, req.body.id + path.extname(file.originalname)); // timestamp + extension originale
  }
});
const upload = multer({ storage: storage });
//Endpoint test
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//Endpoint to get items
app.get('/produits', (req, res) => {
    // Logic to get items
    res.json(listProduits)
})

//Endpoint to add an item
app.post('/produits', upload.single("image"),(req, res) => {
    const produit = {
        id: parseInt(req.body.id),
        nom: req.body.nom,
        prix: parseFloat(req.body.prix),
        image: req.file ? req.file.filename : null
    }
    listProduits.push(produit)
    console.log(listProduits);
    res.status(201).json(produit)
})
//Endpoint to delete an item
app.delete('/produits/:id', (req, res) => {
    const produitId = parseInt(req.params.id)
    const index = listProduits.findIndex(p => p.id === produitId)
    if (index !== -1) {
        listProduits.splice(index, 1)
        res.status(204).send()
    } else {
        res.status(404).json({ message: 'Produit not found' })
    }
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

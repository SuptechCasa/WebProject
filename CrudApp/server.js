const express = require('express')
const app = express()
app.use(express.json())
const listProduits = [
    { id: 1, nom: 'PC', prix: 6000 },
    { id: 2, nom: 'Casque', prix: 300 }
]
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
app.post('/produits', (req, res) => {
    const newProduit = req.body
    listProduits.push(newProduit)
    res.status(201).json(newProduit)
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

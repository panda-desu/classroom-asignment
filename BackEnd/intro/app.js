const express = require("express")

const cors = require('cors');

const fs = require('fs');

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json();

const app = express();
app.use(cors());

const port = 8000;

let categories = JSON.parse(fs.readFileSync("./categoryData.json", "utf-8"))

const updateCategoriesFile = () => {
    fs.writeFileSync('categoryData.json', JSON.stringify(categories))
}


const article = [
    {
        id: 1,
        name: "Kiki",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
        text: "123123123",
    },
    {
        id: 2,
        name: "Koko",
        imageUrl: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
        text: "ausfhasid",
    },
    {
        id: 3,
        name: "Sdoko",
        imageUrl: "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x2.jpg",
        text: "iohpdfshijbvcjipoxbvcjioxbvjiopxfjiopxfgijofs",
    },
    {
        id: 4,
        name: "KAKA",
        imageUrl: "https://img.freepik.com/free-vector/cute-panda-sipping-boba-milk-tea-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2173.jpg?w=2000",
        text: "1231231",
    },
    {
        id: 5,
        name: "KAKasas",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cosmic_Background_Imager.jpeg",
        text: "123123sfbvasdhivjsdiopc1",
    },
    {
        id: 5,
        name: "KAKasas",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cosmic_Background_Imager.jpeg",
        text: "123123sfbvasdhivjsdiopc1",
    }

]
let nextCatId = categories.length

app.get('/article', (req, res) => {
    res.status(200)
    res.json(article)
})
app.get('/article/:id', (req, res) => {
    const { id } = req.params;
    res.json(article[Number(id) - 1])
})



app.get('/categories', (request, response) => {

    response.status(200)
    response.json(categories)
})
app.get('/categories/:id', (request, response) => {
    const { id } = request.params;
    let category = null
    for (const row of categories) {
        if (id == row.id) {
            category = row
            break
        }
    }
    response.json(category)
})
app.delete('/categories/:id', (req, res) => {
    const { id } = req.params
    categories = categories.filter((row) => row.id != id)
    updateCategoriesFile()
    res.json(id)
})
app.post('/categories', jsonParser, (req, res) => {
    console.log(req.body);
    const { name } = req.body
    const newCategory = { id: nextCatId++, name }
    categories.push(newCategory)
    res.json(newCategory)
})
app.patch('/categories/:id', jsonParser, (req, res) => {
    let { id } = req.params
    let { name } = req.body
    id = Number(id)
    let updatedCat
    categories = categories.map((cat) => {
        if (cat.id === id) {
            updatedCat = { id, name }
            return updatedCat
        }
        return cat
    })
    res.json(updatedCat)

})

let products = JSON.parse(fs.readFileSync('MOCK_DATA.json', 'utf-8'))

app.get('/products', (req, res) => {
    let { pageSize, page, priceFrom, priceTo, q, } = req.query
    pageSize = Number(pageSize) || 10
    page = Number(page) || 1
    let start, end
    start = (page - 1) * pageSize
    end = start + pageSize

    const items = products.slice(start, end)

    res.json({
        total: products.length,
        totalPages: Math.ceil(products.length / pageSize),
        page,
        pageSize,
        items

    })
})

app.listen(port, () => {
    console.log('HelloItsMePanda:' + port)
})

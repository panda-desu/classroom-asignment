const express = require("express")

const cors = require('cors');

const fs = require('fs');

const bodyParser = require('body-parser');
const { resolvePtr } = require("dns");
const { response } = require("express");

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
    end = start * pageSize

    const newProducts = products.filter((product) => {
        let matching = true
        if (q) {
            matching = product.name.toLowerCase().includes(q.toLowerCase())
        }
        return matching
    })

    const items = newProducts.slice(start, end)

    res.json({
        total: newProducts.length,
        totalPages: Math.ceil(newProducts.length / pageSize),
        page,
        pageSize,
        items

    })
})

let menuPosition = JSON.parse(fs.readFileSync('menuPositions.json', 'utf-8'))

let nextPosId = menuPosition.length + 1

app.get(`/menu-positions`, (req, res) => {
    res.json(menuPosition)
})

app.get('/menu-positions/:id', (request, response) => {
    const { id } = request.params;
    let position = null
    for (const row of menuPosition) {
        if (id == row.id) {
            position = row
            break
        }
    }
    response.json(position)
})

app.post('/menu-positions', jsonParser, (req, res) => {
    const { name, alias } = req.body
    const newPosition = { id: nextPosId++, name, alias }
    menuPosition.push(newPosition)
    fs.writeFileSync('newPosition.json', JSON.stringify(menuPosition))
    res.json(newPosition)
})

app.delete('/menu-positions/:id', (req, res) => {
    const { id } = req.params
    menuPosition = menuPosition.filter((row) => row.id !== Number(id))
    fs.writeFileSync('menuPosition.json', JSON.stringify(menuPosition))
    res.json(id)
})

let menus = JSON.parse(fs.readFileSync('menu.json', 'utf-8'))
let nextNenuId = menus.length + 1

app.get('/menus', (req, res) => {
    const { positionId } = req.query
    if (!positionId) return res.statusCode(400).json('PositionId required!')

    const result = menus.filter((menu) => {
        return menu.positionId === Number(positionId)
    })
    return res.json(result)
})
pp.get("/menus/:positionAlias", (req, res) => {
    const { positionAlias } = req.params;
    let position = null;

    for (const row of menuPositions) {
        if (positionAlias == row.alias) {
            position = row;
            break;
        }
    }

    if (!position) return res.status(400).json("Position not found");

    const result = menus.filter((menu) => {
        return menu.positionId === position.id;
    });
    return res.json(result);
});

app.post("/menus", jsonParser, (req, res) => {
    const { name, link, newTab, positionId, ordering } = req.body;
    const newMenu = { id: nextMenuId, name, link, newTab, positionId, ordering };
    menus = [...menus, newMenu];
    fs.writeFileSync("menus.json", JSON.stringify(menus));
    return res.json(newMenu);
});

app.delete("/menus/:id", (req, res) => {
    const { id } = req.params;
    menus = menus.filter((row) => row.id !== Number(id));
    fs.writeFileSync("menus.json", JSON.stringify(menus));
    res.json(id);
});


app.listen(port, () => {
    console.log('HelloItsMePanda:' + port)
})

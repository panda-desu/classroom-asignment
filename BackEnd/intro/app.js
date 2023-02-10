const express = require("express")

const cors = require('cors');

const fs = require('fs');

const app = express();
const port = 8000;


const bodyParser = require('body-parser');
const { match } = require("assert");
const { resolvePtr } = require("dns");
const { response } = require("express");

const jsonParser = bodyParser.json();


app.use(cors());


let categories = JSON.parse(fs.readFileSync("categorydata.json", "utf-8"))

const updateCategoriesFile = () => {
    fs.writeFileSync('categorydata.json', JSON.stringify(categories))
}

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
    categories = categories.filter((row) => row.id !== Number(id))
    updateCategoriesFile()
    res.json(id)
})
app.post('/categories', jsonParser, (req, res) => {
    console.log(req.body);
    const { name } = req.body
    const newCategory = { id: nextCatId++, name }
    categories.push(newCategory)
    updateCategoriesFile()
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
    updateCategoriesFile()
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

let menuPositions = JSON.parse(fs.readFileSync('menuPositions.json', 'utf-8'))

let nextPosId = menuPositions.length + 1

app.get(`/menu-positions`, (req, res) => {
    res.json(menuPositions)
})

app.get('/menu-positions/:id', (request, response) => {
    const { id } = request.params;
    let position = null
    for (const row of menuPositions) {
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
    menuPositions.push(newPosition)
    fs.writeFileSync('menuPositions.json', JSON.stringify(menuPositions))
    res.json(newPosition)
})

app.delete('/menu-positions/:id', (req, res) => {
    const { id } = req.params
    menuPositions = menuPositions.filter((row) => row.id !== Number(id))
    fs.writeFileSync('menuPositions.json', JSON.stringify(menuPositions))
    res.json(id)
})

let menus = JSON.parse(fs.readFileSync('menus.json', 'utf-8'))
let nextMenuId = menus.length + 1

app.get('/menus', (req, res) => {
    const { positionId } = req.query
    if (!positionId) return res.statusCode(400).json('PositionId required!')

    const result = menus.filter((menu) => {
        return menu.positionId === Number(positionId)
    })
    return res.json(result)
})
app.get("/menus/:positionAlias", (req, res) => {
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
const rand = Math.floor(Math.random() * 6) + 1;
const express = require('express');
const app = express()
const cors = require('cors')
const port = 4000

/**
 * package.json dotorh scriptn deer 'start': npm iin ardaas bichij bga ug terminal deer bichdeg commanduud yma.
 * nodemon n tuhain havtsand shine file uusgehed mon filed uurchlult oruulhad automathaar res hiideg.  
 */


app.use(cors())
/**
 * busad server luu handah erh 
 * mun busad server uurluge ireh huseltiig zuvshuurhiin tuld cors iig ashiglana.
 */

app.use(express.json())
/**
 * eniig duudaj baij front end ees irj bga huseltiig tanin ashiglah blomjtoi bolgodog.
 * body parser gj duuddg
 */

app.get('/', (req, res) => {
    res.json('asda dsa dsasd')
})



app.listen(port, () => {
    console.log('hello' + port)

}) 
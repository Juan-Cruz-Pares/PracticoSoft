'use strict'
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const config = require('./configs/config')
const session = require('./session')

process.title = config.NAME_APLICACION
console.log("\x1b[1m");

app.set('port', config.PORT)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/addRestaurant', function (req, res) {
    let name = req.body.name
    let kindOfRestaurant = req.body.kindOfRestaurant
    let specials = req.body.specials

    if (session.addRestaurant(name, kindOfRestaurant, specials) == 0)
        res.status(201).send('ok')
    else
        res.status(400).send('existing name')
})

app.get('/api/getRestaurants', function (req, res) {
    let kindOfRestaurant = req.query.kindOfRestaurant
    if (kindOfRestaurant) {
        let obj = session.getRestaurantXKindOfRestaurant(kindOfRestaurant)
        if (obj != -1) res.status(201).send(obj)
        else
            res.status(400).send('not existing name')
    } else {
        res.status(201).send(session.listRestaurant)
    }
})

app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'))
})


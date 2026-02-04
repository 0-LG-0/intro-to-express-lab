const express = require('express')

const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}.`)
})

app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number) 
    const roll = Math.floor(Math.random() * (number +1))

    if (isNaN(number)) {
        return res.send(`<h1>You must specify a number, input isn't a number.</h1>`)
    }else {
        res.send(`<h1>You rolled a ${roll}</h1>`)
    }
    /*const num = req.params.number
    if (Number.isInteger(parseInt(num))) {
        res.send(`<h1>You rolled a ${Math.floor(Math.random() * num)}</h1>`)
    }else {
        res.send(`You must specify a number, ${num} is not a number.`)
    }
        */
})

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const cId = collectibles[req.params.index]
    const rpId = req.params.index
    if (cId) {
        res.send(`So, you want the <strong>${cId.name}</strong>? For <strong>$${cId.price}</strong>, it can be yours!`)
        }
        else if (isNaN(Number(rpId))){
            res.send(`<strong>${rpId}</strong> is an invalid input`)
        }else {
            res.send(`Item <strong>${rpId}</strong> is not yet in stock. Check back soon!`)
        }
})

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];


app.get('/shoes', (req, res) => {
    const { type } = req.query
    const minPrice = Number(req.query['min-price'])
    const maxPrice = Number(req.query['max-price'])

    let filteredShoes = shoes

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type)
    }
    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
    }
    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
    }
    res.send(filteredShoes)
})

app.listen(3000, () => console.log("this app is running on port 3000"))
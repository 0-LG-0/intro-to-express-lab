const express = require('express')

const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}.`)
})

app.get('/roll/:number', (req, res) => {
    let msg
    const input = req.params.number
    const number = Number(req.params.number)

    if (isNaN(number)) {
        msg = `<h1>You must specify a number, ${input} isn't a number.</h1>`
    }else{
        const roll = Math.floor(Math.random() * (number +1))
        msg = `<h1>You rolled a ${roll}</h1>`
    }
    res.send(msg)
})

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    let msg
    const rpId = Number(req.params.index)
    const input = req.params.index
    
        if (isNaN(rpId)){
            msg = `<strong>${input}</strong> is an invalid input`
        }else {
            msg = `Item <strong>${rpId}</strong> is not yet in stock. Check back soon!`
        }
        const cId = collectibles[req.params.index]
        if (cId) {
            msg = `So, you want the <strong>${cId.name}</strong>? For <strong>$${cId.price}</strong>, it can be yours!`
        }
        res.send(msg)
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
    else if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
    }
    else if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
    }
    res.send(filteredShoes)
})

app.listen(3000, () => console.log("this app is running on port 3000"))
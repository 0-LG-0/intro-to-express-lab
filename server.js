const express = require('express')

const app = express()

app.listen(3000, () => console.log("this app is running on port 3000"))

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}.`)
})

app.get('/roll/:number', (req, res) => {
    const num = req.params.number
    if (Number.isInteger(parseInt(num))) {
        res.send(`<h1>You rolled a ${Math.floor(Math.random() * num)}</h1>`)
    }else {
        res.send(`You must specify a number, ${num} is not a number.`)
    }
})

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const cId = collectibles[req.params.index]
})

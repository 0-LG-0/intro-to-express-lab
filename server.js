const express = require('express')

const app = express()

app.listen(3000, () => console.log("this app is running on port 3000"))

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}.`)
})

app.get('/roll/:number', (req, res) => {
    if (Number.isInteger(parseInt(req.params.number))) {
        res.send(`<h1>You rolled a ${Math.floor(Math.random() * req.params.number)}</h1>`)
    }else {
        res.send(`You must specify a number, ${req.params.number} is not a number.`)
    }
})


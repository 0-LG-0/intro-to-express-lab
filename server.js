const express = require('express')

const app = express()

app.listen(3000, () => console.log("this app is running on port 3000"))

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}.`)
})
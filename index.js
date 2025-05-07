const express = require('express')
const app = express()
const port = 3014

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/21_cars_meme.jpg', (req, res) => {
    res.sendFile(__dirname + '/views/21_cars_meme.jpg')
})

app.get('/.well-known/discord', (req, res) => {
    res.send('dh=83816783f4f2c312ebedc3ae4263f9edbae591e2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('This is my Chatbot Back-End.')
})

app.get('/home', (req, res) => {
    res.send('This is my Home.')
})

app.get('/about', (req, res) => {
    res.send('This is my About.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
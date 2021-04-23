'use strict'

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static/'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

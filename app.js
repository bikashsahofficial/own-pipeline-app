const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Own pipeline app running')
})

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

module.exports = app
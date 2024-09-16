const express = require('express')
const cors = require('cors')
const data = require('./data.json')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('this is minhazul abedin apon server ')
})

app.get('/data', (req, res) => {
  res.send(data)
})

app.get('/data/:id', (req, res) => {
  
    const id = parseInt( req.params.id)
    console.log( 'this out data', id)
    const dataS = data.find(data => data.id === id ) || {};
    res.send(dataS)


}) 

app.listen(port, () => {
  console.log(`apon Port-----------> ${port}`)
}) 


const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())


app.get('/', (req, res) => {
    db.query("SELECT * FROM mahasiswa", (error, result) => {
        response(200, result, "get all", res)
    })
})

app.get('/find', (req, res) => {
    const sql = `SELECT nama FROM mahasiswa WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "get name", res)
    })
})

app.post('/login', (req, res) => {
    console.log({requestFromOutside: req.body})
    res.send('Hello World lalala')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// model untuk koneksi ke database
// controller untuk jembatan antara request dan responsenya
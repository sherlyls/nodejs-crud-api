const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) =>  {
    response(200, "api ready to go", "SUCCESS", res)
})

app.get('/mahasiswa', (req, res) =>  {
    const sql = "SELECT * from mahasiswa"
    db.query(sql, (err, fields) => {
        if (err) throw err
        response(200, fields, "SUCCESS", res)
    })
    
})

// :id akan memasukkan nilai id setelah /mahasiswa
app.get('/mahasiswa/:nim', (req, res) =>  {
    const nim = req.params.nim
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (err, fields) => {
        if (err) throw err
        response(200, fields, "ini data get", res)
    })
    
})

// biasanya insert, tp bisa juga delete dan update data
app.post('/mahasiswa', (req, res) =>  {
    const {nim, nama, alamat} = req.body
    const sql = `INSERT INTO mahasiswa (nim, nama, alamat) VALUES (${nim}, '${nama}', '${alamat}')`
    db.query(sql, (err, fields) => {
        console.log(fields)
    })
    res.send("ok")
    // response(200, "ini data", "INI POSTING", res)
})

app.put('/mahasiswa', (req, res) =>  {
    response(200, "INI UPDATE DATA", res)
})

app.delete('/mahasiswa', (req, res) =>  {
    response(200, "INI DELETE DATA", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
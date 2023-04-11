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
        if (err) response(500, "invalid", "error", res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId
            }
            response(200, data, "INI POSTING", res)
        } 
     })
})

app.put('/mahasiswa', (req, res) =>  {
    const {nim, nama, alamat} = req.body
    const sql = `UPDATE mahasiswa SET nama = '${nama}', alamat = '${alamat}' WHERE nim = ${nim} `
    db.query(sql, (err, fields) => {
        console.log(fields)
        if (err) response(500, "invalid", "error", res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                message: fields.message
            }
            response(200, data, "INI UPDATE DATA", res)
        } else {
            response(404, "user not found", "error", res)
        }
    })
    
})

app.delete('/mahasiswa', (req, res) =>  {
    const {nim} = req.body
    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (err, fields) => {
        if (err) response (500, "invalid", "error", res)
        if (fields.affectedRows) {
            const data = {
                isDelete: fields.affectedRows
            }
            response(200, data, "INI DELETE DATA", res)
        }   else {
            response(404, "user not found", "error", res)
        }
    }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
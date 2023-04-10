// const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser')
// const db = require('./connection')
// const response = require('../response')

// app.use(bodyParser.json())

// // kalo dimasukkan angka disebelah kiri, itu status code ya, kalo angka bukan untuk status code validasi jadi error
// app.get('/', (req, res) =>  {
//     res.send(304)
// })

// app.get('/mahasiswa', (req, res) =>  {
//     res.send("mahasiswa")
// })

// // :id akan memasukkan nilai id setelah /mahasiswa
// app.get('/mahasiswa/:nim', (req, res) =>  {
//     const nim = req.params.nim
//     res.send(`spesifik mahasiswa by id ${nim}`)
// })

// // biasanya insert, tp bisa juga delete dan update data
// app.post('/mahasiswa/post', (req, res) =>  {
//     res.send("INI POSTING")
// })

// app.put('/mahasiswa/put', (req, res) =>  {
//     res.send("INI UPDATE DATA")
// })

// app.delete('/mahasiswa', (req, res) =>  {
//     res.send("INI DELETE DATA")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
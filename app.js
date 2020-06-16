const express = require('express')
const connectDB = require("./DB/connection")
const app = express()

connectDB();
const Port = process.env.Port || 3000;

//route
app.get('/', (req, res) => res.send('Hello World!'))

//lister
app.listen(Port, () => console.log("server started"));
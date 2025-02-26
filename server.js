const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server Running on PORT: ",PORT)
})
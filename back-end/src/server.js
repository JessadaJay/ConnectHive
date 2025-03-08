const express = require('express')
const app = express()
const mongoose  = require('mongoose')
require('dotenv').config();
const cors = require('cors');


const PORT = process.env.PORT
const dbUrl = process.env.DB_URI



//connect DB
mongoose.connect(dbUrl)
.then(()=>{
    console.log('connect mongoDB')
})
.catch((err)=>{
    console.log('Error',err)
})

//Runtime server
app.use(cors());
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
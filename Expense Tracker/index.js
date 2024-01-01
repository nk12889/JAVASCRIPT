const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000;


app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})



app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})
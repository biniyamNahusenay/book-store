const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 5000

try{
    mongoose.connect(process.env.mongo_url)
  console.log("mongodb connectedd")
}catch(err){
   console.log(err)
   process.exit(1)
}

app.listen(PORT,()=>{
    console.log('server is running on port 5000')
})
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorMiddleware")

require("dotenv").config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//error middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

//Routes middleware
app.use("/api/user",userRoutes)

app.get("/",(req,res)=>{
    res.send("home page")
})

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
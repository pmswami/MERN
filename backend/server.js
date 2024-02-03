const express = require("express")
require("dotenv").config()
const workoutRoutes = require("./routes/workouts")
const mongoose = require("mongoose") 
// Mongoose provides ability to connect to DB and also provides extra validations on data that is being fetched from DB and written to DB.


//express app
const app = express()

app.use(express.json()) // Automatically converts/parses each req into valid json 

//middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
// app.get("/", (req, res)=>{
//     res.json({msg: "Welcome to the app!"})
// })

app.use("/api/workouts", workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to DB and listening on port ${process.env.PORT}!!!`)
        })
    })
    .catch((error) =>{
        console.log(error)
    })
//listen for requests
// app.listen(4000, ()=>{
//     console.log("Listening on port 4000!!!")
// })

// app.listen(process.env.PORT, ()=>{
//     console.log(`Connected to DB and listening on port ${process.env.PORT}!!!`)
// })
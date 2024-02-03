const express = require("express")
require("dotenv").config()
const workoutRoutes = require("./routes/workouts")

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

//listen for requests
// app.listen(4000, ()=>{
//     console.log("Listening on port 4000!!!")
// })

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}!!!`)
})
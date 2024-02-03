const express = require("express")

const router = express.Router()

//Workout routers
//GET all workouts
router.get("/", (req, res)=>{
    res.json({msg: "GET all workouts"})
})

//GET one workout
router.get("/:id", (req, res)=>{
    res.json({msg: "GET one workout"})
})

//POST new workout
router.post("/",(req, res)=>{
    res.json({msg: "POST a new workout"})
})

//DELETE a workout
router.delete("/:id", (req, res)=>{
    res.json({msg: "DELETE a workout"})
})

//UPDATE a workout
router.patch("/:id", (req, res)=>{
    res.json({msg: "UPDATE a workout"})
})


module.exports = router

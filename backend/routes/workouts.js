const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
//requireAuth for all workout
router.use(requireAuth);
//Workout routers
//GET all workouts
// router.get("/", (req, res) => {
//   res.json({ msg: "GET all workouts" });
// });
router.get("/", getWorkouts);

//GET one workout
// router.get("/:id", (req, res) => {
//   res.json({ msg: "GET one workout" });
// });
router.get("/:id", getWorkout);

//POST new workout
// router.post("/", async (req, res) => {
//   //   const { title, load, reps } = req.body;
//   //   try {
//   //     const workout = await Workout.create({ title, load, reps });
//   //     res.status(200).json(workout);
//   //   } catch {
//   //     (error) => {
//   //       res.status(400).json({ error: error.message });
//   //     };
//   //   }
//   // res.json({msg: "POST a new workout"})
// });
router.post("/", createWorkout);

//DELETE a workout
// router.delete("/:id", (req, res) => {
//   res.json({ msg: "DELETE a workout" });
// });
router.delete("/:id", deleteWorkout);

//UPDATE a workout
// router.patch("/:id", (req, res) => {
//   res.json({ msg: "UPDATE a workout" });
// });

router.patch("/:id", updateWorkout);

module.exports = router;

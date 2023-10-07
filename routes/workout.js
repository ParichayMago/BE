const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

// GET all workouts
router.get("/", getAllWorkouts);

// GET Single workouts
router.get("/:id", getWorkout);

// POST A ALL
router.post("/", createWorkout);

// DELETE A WORKOUT
router.delete("/:id", deleteWorkout);

// UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
} = require("../controllers/workoutControllers");

// GET all workouts
router.get("/", getAllWorkouts);

// GET Single workouts
router.get("/:id", getWorkout);

// POST A ALL
router.post("/", createWorkout);

// DELETE A WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE workout to ALl" });
});

// UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE workout to ALl" });
});

module.exports = router;

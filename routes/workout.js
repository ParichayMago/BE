const express = require("express");
const router = express.Router();
const Workout = require("../schema/workoutSchema");

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// GET Single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// POST A ALL
router.post("/", async(req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({title, load, reps});
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// DELETE A WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE workout to ALl" });
});

// UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE workout to ALl" });
});

module.exports = router;

const express = require("express");
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// GET Single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// POST WORKOUT TO ALL
router.post("/", (req, res) => {
  res.json({ mssg: "POST workout to ALl" });
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

require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const workoutRoutes = require("./routes/workout");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// mongoose connect
mongoose
  .connect(process.env.mongo_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to DB & Listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

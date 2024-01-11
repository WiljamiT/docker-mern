const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Movie = require("./database/movie.model");
const connect = require("./database/connect");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World!".rainbow);

  res.send("Hello World!");
});

app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.post("/api/movies", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.json(newMovie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.delete("/api/movies/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    // Check if the movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }

    // Remove the movie
    await movie.deleteOne(); // or use await Movie.deleteOne({ _id: movieId });

    res.json({ msg: "Movie deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.put("/api/movies/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    // Check if the movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }

    // Update the movie with the new data from the request body
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: movieId },
      { $set: req.body },
      { new: true } // This option returns the modified document instead of the original
    );

    res.json(updatedMovie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const deleteMovie = async (movieId, setMovies) => {
  try {
    await axios.delete(`${apiUrl}/${movieId}`);
    console.log("Movie deleted successfully");
    setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== movieId));
  } catch (err) {
    console.error("Error deleting movie:", err);
  }
};

export const editMovie = (movie, setEditMode, setEditedMovie) => {
  setEditMode(true);
  setEditedMovie(movie);
};

export const updateMovie = async (editedMovie, setEditMode, setMovies, setEditedMovie) => {
  try {
    await axios.put(`${apiUrl}/${editedMovie._id}`, editedMovie);
    console.log("Movie updated successfully");
    setEditMode(false);
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie._id === editedMovie._id ? editedMovie : movie))
    );
    setEditedMovie({});
  } catch (err) {
    console.error("Error updating movie:", err);
  }
};

export const cancelEdit = (setEditMode, setEditedMovie) => {
  setEditMode(false);
  setEditedMovie({});
};

export const handleInputChange = (e, setEditedMovie) => {
  const { name, value } = e.target;
  setEditedMovie((prev) => ({
    ...prev,
    [name]: value,
  }));
};
import * as api from "../api";

export const deleteMovie = async (movieId, setMovies) => {
  try {
    await api.deleteMovie(movieId, setMovies);
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
};

export const editMovie = (movie, setEditMode, setEditedMovie) => {
  try {
    api.editMovie(movie, setEditMode, setEditedMovie);
  } catch (error) {
    console.error("Error editing movie:", error);
  }
};

export const updateMovie = async (editedMovie, setEditMode, setMovies, setEditedMovie) => {
  try {
    await api.updateMovie(editedMovie, setEditMode, setMovies, setEditedMovie);
  } catch (error) {
    console.error("Error updating movie:", error);
  }
};

export const cancelEdit = (setEditMode, setEditedMovie) => {
  try {
    api.cancelEdit(setEditMode, setEditedMovie);
  } catch (error) {
    console.error("Error cancelling edit:", error);
  }
};

export const handleInputChange = (e, setEditedMovie) => {
  try {
    api.handleInputChange(e, setEditedMovie);
  } catch (error) {
    console.error("Error handling input change:", error);
  }
};

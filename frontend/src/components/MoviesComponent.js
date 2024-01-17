import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import * as api from "../api";
import MoviesContent from "./MoviesContent";


const MoviesComponent = () => {

  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, data: fetchedMovies, error } = useFetch(apiUrl);

  const [movies, setMovies] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedMovie, setEditedMovie] = useState({});

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    if (fetchedMovies) {
      setMovies(fetchedMovies);
      setTotalPages(Math.ceil(fetchedMovies.length / 5));
    }
  }, [fetchedMovies]);

  const handleDelete = (movieId) => api.deleteMovie(movieId, setMovies);
  const handleEdit = (movie) => api.editMovie(movie, setEditMode, setEditedMovie);
  const handleUpdate = () => api.updateMovie(editedMovie, setEditMode, setMovies, setEditedMovie);
  const handleCancelEdit = () => api.cancelEdit(setEditMode, setEditedMovie);
  const handleChange = (e) => api.handleInputChange(e, setEditedMovie);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <MoviesContent
      movies={movies}
      editMode={editMode}
      editedMovie={editedMovie}
      totalMovies={totalPages}
      currentPage={page}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleUpdate={handleUpdate}
      handleCancelEdit={handleCancelEdit}
      handleChange={handleChange}
      handlePageChange={handlePageChange}
    />
  );
}

export default MoviesComponent
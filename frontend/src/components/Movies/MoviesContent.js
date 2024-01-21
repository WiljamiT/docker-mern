import React from "react";
import { Pagination } from "@mui/material";
import text from "../../strings.json";
import EditForm from "../EditForm";
import "./MoviesContent.css";
import MovieCard from "./MovieCard";

const MoviesContent = ({
  movies,
  editMode,
  editedMovie,
  totalMovies,
  currentPage,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleCancelEdit,
  handleChange,
  handlePageChange,
  isAuthenticated,
}) => {
  const getPaginatedMovies = () => {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    return movies.slice(startIndex, endIndex);
  };

  return (
    <main className="movies_container">
      <h1 className="movies_heading">{text.strings.header.mongo}</h1>
      <p className="sub_heading">{text.strings.text.main}</p>

      <ul className="movie_list">
        {getPaginatedMovies().map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </ul>

      <Pagination
        count={totalMovies}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: "20px" }}
      />

      {editMode && (
        <EditForm
          editedMovie={editedMovie}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
          onChange={handleChange}
        />
      )}
    </main>
  );
};

export default MoviesContent;
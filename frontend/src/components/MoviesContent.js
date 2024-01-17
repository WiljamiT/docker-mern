import React from "react";
import { Pagination } from "@mui/material";
import text from "../strings.json";
import MovieCard from "./MovieCard";
import EditForm from "./EditForm";

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
}) => {
  const getPaginatedMovies = () => {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    return movies.slice(startIndex, endIndex);
  };

  return (
    <main className="container">
      <h1 className="heading">{text.strings.header.nav}</h1>
      <p className="sub_heading">{text.strings.header.main}</p>

      <ul className="movie_list">
        {getPaginatedMovies().map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            onEdit={handleEdit}
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
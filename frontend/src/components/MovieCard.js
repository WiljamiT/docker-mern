import React from "react";
import { Link } from "react-router-dom";
import text from "../strings.json";
//import * as api from "../api";

const MovieCard = ({ movie, onDelete, onEdit }) => {
  const handleDelete = () => onDelete(movie._id);
  const handleEdit = () => onEdit(movie);

  return (
    <li className="movie_card" style={{ marginLeft: "10px" }}>
      <div className="movie_info">
        <h4>{movie.title}</h4>
        <p>{movie.description}</p>
        <div className="movie_link">
          <Link to={movie.link} target="_blank" className="link">
            {text.strings.card.watch}
          </Link>
          <Link onClick={handleDelete} className="link" style={{ color: "red", marginLeft: "1rem" }}>
            {text.strings.card.delete}
          </Link>
          <button onClick={handleEdit} className="link" style={{ marginLeft: "1rem" }}>
            {text.strings.button.edit}
          </button>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;

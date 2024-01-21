import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import text from "../../strings.json";

const MovieCard = ({ movie, onDelete, onEdit, isAuthenticated }) => {

  const handleDelete = () => onDelete(movie._id);
  const handleEdit = () => {
    if (isAuthenticated) {
      onEdit(movie);
    } else {
      toast("You have to be logged in to edit!");
    }
  };

  return (
    <li className="movie_card">
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
          <button
            onClick={handleEdit}
            className="link"
            style={{ marginLeft: "1rem" }}
          >
            {text.strings.button.edit}
          </button>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
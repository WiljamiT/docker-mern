import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedMovie, setEditedMovie] = useState({});

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log("Response data:", res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, []);

  const handleDelete = (movieId) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/${movieId}`;

    axios
      .delete(apiUrl)
      .then((res) => {
        console.log("Movie deleted successfully");
        setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== movieId));
      })
      .catch((err) => {
        console.error("Error deleting movie:", err);
      });
  };

  const handleEdit = (movie) => {
    setEditMode(true);
    setEditedMovie(movie);
  };

  const handleUpdate = () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/${editedMovie._id}`;

    axios
      .put(apiUrl, editedMovie)
      .then((res) => {
        console.log("Movie updated successfully");
        setEditMode(false);
        setMovies((prevMovies) =>
          prevMovies.map((movie) => (movie._id === editedMovie._id ? editedMovie : movie))
        );
        setEditedMovie({});
      })
      .catch((err) => {
        console.error("Error updating movie:", err);
      });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedMovie({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="container">
      <h1 className="heading">Explore</h1>
      <p className="sub_heading">List of movies to watch</p>

      <ul className="movie_list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie._id} className="movie_card" style={{marginLeft: "10px"}}>
              <div className="movie_info">
                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
                <div className="movie_link">
                  <Link to={movie.link} target="_blank" className="link">
                    Watch
                  </Link>
                  <Link onClick={() => handleDelete(movie._id)} className="link" style={{ color: "red", marginLeft: "1rem" }}>
                    X
                  </Link>
                  <button onClick={() => handleEdit(movie)} className="link" style={{ marginLeft: "1rem" }}>
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="no_result">Oops, No movies available</p>
        )}
      </ul>

      {editMode && (
        <div>
          <h2>Edit Movie</h2>
          <form>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editedMovie.title || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={editedMovie.description || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="button" onClick={handleUpdate}>
                Update
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

export default Home;

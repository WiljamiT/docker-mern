import axios from "axios";

const handleDelete = (movieId, setMovies) => {
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

export default handleDelete;
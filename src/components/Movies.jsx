import React, { useState } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";

function Movies() {

  const [movies, setMovies] = useState([
    {
      title: "Captain America - The First Avenger",
      hall: 2,
      price: 350,
      poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg",
      likes: 0,
      dislikes: 0
    },
    {
      title: "The Papillon",
      hall: 1,
      price: 300,
      poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg",
      likes: 0,
      dislikes: 0
    },
    {
      title: "The Lost City of Z",
      hall: 5,
      price: 350,
      poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      likes: 0,
      dislikes: 0
    },
    {
      title: "Klaus",
      hall: 3,
      poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg",
      likes: 0,
      dislikes: 0
    },
    {
      title: "Bullet Train",
      poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg",
      likes: 0,
      dislikes: 0
    }
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleLike = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].likes++;
    setMovies(updatedMovies);
  };

  const handleDislike = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].dislikes++;
    setMovies(updatedMovies);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleEditMovie = (updatedMovie) => {
    const updatedMovies = [...movies];

    updatedMovies[editingIndex] = {
      ...updatedMovie,
      likes: updatedMovies[editingIndex].likes,
      dislikes: updatedMovies[editingIndex].dislikes
    };

    setMovies(updatedMovies);
    setEditingIndex(null);
  };

  const today = new Date().toLocaleDateString();

  return (
    <div>

      <MovieForm
        onAddMovie={handleAddMovie}
        onEditMovie={handleEditMovie}
        editingMovie={
          editingIndex !== null
            ? movies[editingIndex]
            : null
        }
      />

      <h1>Repertoar za danas ({today})</h1>

      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          hall={movie.hall}
          price={movie.price}
          poster={movie.poster}
          likes={movie.likes}
          dislikes={movie.dislikes}
          onLike={() => handleLike(index)}
          onDislike={() => handleDislike(index)}
          onEdit={() => setEditingIndex(index)}
        />
      ))}

    </div>
  );
}

export default Movies;
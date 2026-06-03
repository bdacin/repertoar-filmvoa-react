import React, { useState, useEffect } from "react";

function MovieForm({
  onAddMovie,
  onEditMovie,
  editingMovie
}) {

  const [title, setTitle] = useState("");
  const [hall, setHall] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {

    if (editingMovie) {
      setTitle(editingMovie.title || "");
      setHall(editingMovie.hall || "");
      setPrice(editingMovie.price || "");
      setPoster(editingMovie.poster || "");
    }

  }, [editingMovie]);

  const clearForm = () => {
    setTitle("");
    setHall("");
    setPrice("");
    setPoster("");
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title || !hall || !price) {
      alert("Popunite sva obavezna polja!");
      return;
    }

    if (hall < 1 || hall > 12) {
      alert("Sala mora biti između 1 i 12!");
      return;
    }

    const movieData = {
      title,
      hall: Number(hall),
      price: Number(price),
      poster
    };

    if (editingMovie) {
      onEditMovie(movieData);
    } else {
      onAddMovie({
        ...movieData,
        likes: 0,
        dislikes: 0
      });
    }

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>
        {editingMovie
          ? "Izmena filma"
          : "Dodaj film"}
      </h2>

      <div>
        <label>Naslov:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Sala:</label>
        <input
          type="number"
          value={hall}
          onChange={(e) => setHall(e.target.value)}
        />
      </div>

      <div>
        <label>Cena:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label>Poster URL:</label>
        <input
          type="text"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
      </div>

      <button type="submit">
        {editingMovie
          ? "Sačuvaj izmene"
          : "Dodaj film"}
      </button>

    </form>
  );
}

export default MovieForm;
import React from "react";
import "./Movie.scss";

function Movie(props) {

  const price = props.price || 300;

  return (
    <div className="movie">

      <div className="movie-left">

        <img
          className="movie-image"
          src={props.poster || "https://via.placeholder.com/80x120"}
          alt="movie"
        />

        <div className="movie-buttons">

          <button onClick={props.onLike}>
            Like
          </button>

          <button onClick={props.onDislike}>
            Dislike
          </button>

        </div>

      </div>

      <div className="movie-text">

        <h3>{props.title}</h3>

        <p>Likes: {props.likes}</p>

        <p>Dislikes: {props.dislikes}</p>

        <p>
          {props.hall
            ? `Sala: ${props.hall}`
            : "Film još uvek nije u ponudi"}
        </p>

        <p>Cena: {price} din</p>

      </div>

    </div>
  );
}

export default Movie;
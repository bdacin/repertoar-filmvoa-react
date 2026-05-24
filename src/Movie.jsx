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

          <button
            onClick={() =>
              props.onReaction(props.title, "Like")
            }
          >
            Like
          </button>

          <button
            onClick={() =>
              props.onReaction(props.title, "Dislike")
            }
          >
            Dislike
          </button>

        </div>

      </div>

      <p className="movie-text">

        {props.title}

        {props.hall
          ? `, sala: ${props.hall}`
          : ", Film još uvek nije u ponudi"}

        , cena: {price}din

      </p>

    </div>
  );
}

export default Movie;
import React from "react";
import Movie from "./Movie";

function App () {
  const movies = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350
  }
];
const today = new Date().toLocaleDateString()
return (
  <div>
    <h1>Repertoar za danas ({today})</h1>
    {movies.map((movie, index) => (
      <Movie
      key={index}
      title={movie.title}
      hall={movie.hall}
      price={movie.price}
      />
    ))}
  </div>
);
}
export default App;
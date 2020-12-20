import React, { useState } from "react";
import "./styles.css";
const moviesDB = {
  Fiction: [
    { name: "Inception", rating: "8.8/10" },
    { name: "The Martian", rating: "8/10" }
  ],

  Thrillers: [
    {
      name: "Joker",
      rating: "8.5/10"
    },
    {
      name: "It",
      rating: "7.3/10"
    }
  ],
  Commedy: [
    {
      name: "Deadpool",
      rating: "8/10"
    },
    {
      name: "The Wolf of Wall Street",
      rating: "8.2/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎥</span> good-movies{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies with IMDB ratings. Select a genre to get
        started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movies) => (
            <li
              key={movies.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div style={{ fontSize: "smaller" }}> {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


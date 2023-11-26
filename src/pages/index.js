import React from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api from "@/api/axiosConfig";
import { useState, useEffect } from "react";
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await api.get("/api/v1/movies");
        console.log(response.data);
        setMovies(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <p>Hello World</p>

      {/* {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))} */}
    </div>
  );
}

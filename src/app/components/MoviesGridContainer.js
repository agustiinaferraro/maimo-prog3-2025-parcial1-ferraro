'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesGrid from '@/app/components/MoviesGrid';

const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32`;

export default function MoviesGridContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      // 1A. Completar esta función
      setLoading(true);

      try {
      const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32");
      setMovies(response.data.results);
      setLoading(false);
      } catch (error) {
        console.log("Hubo un error", error);
        setError("Error al cargar las peliculas");
        setLoading(false);
      }
    };
  fetchMovies();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Hubo un error</p>}
      {!loading && !error && <MoviesGrid movies={movies} loading={loading} />}
    </div>
  );
}

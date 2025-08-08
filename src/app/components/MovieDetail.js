'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*const API_URL = `https://api.themoviedb.org/3/movie/[ID_MOVIE]?api_key=eb7e3fd7272143562cec959061b5eb32`;*/

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`);
        setMovieDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Hubo un error", error);
        setError("Error al cargar las peliculas");
        setLoading(false);
      }  
    };
  fetchMovieDetail();
  }, [id]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className='grid'>
          <div className='col_6  flex justify-center p-10'>
            <div className='relative w-[500px] h-[500px] text-white'>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                fill={true}
                alt={movieDetail.title}
              />
            </div>
          </div>
          <div className='col_6 flex flex-col justify-center p-10'>
            <h1 className='text-2xl font-bold mb-8'>{movieDetail.title}</h1>
            <p className='mb-10'>{movieDetail.overview}</p>
            {/* 3 Listado de generos */}

            <div>
            {movieDetail.genres && (
              <ul className="generos mb-10">   
                {movieDetail.genres.map((genre)=>( 
                <li key={genre.id}>{genre.name}</li>))}
              </ul>)}  
            </div>  

            <div className='flex gap-5'>
              <Link
                className='bg-white rounded-xl p-2 w-[150px] text-black text-center hover:bg-opacity-50'
                href='/'
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

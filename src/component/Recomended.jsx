import React, { useState, useEffect } from 'react';

function Recomended() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10', {
          headers: {
            'X-API-KEY': '68YR40J-YENM25K-K03KW0S-HS0ETEC'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.docs);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='mb-32'>
      <h2 className='text-white font-small text-3xl mt-8'>Recomended for you</h2>
      <div className="container mx-auto max-w-[1280px] grid grid-cols-4 gap-12">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="cards relative mt-10 w-[280px] h-[200px]">
              <span className='absolute left-[230px] cursor-pointer top-4 w-10 h-10 bg-gray-700 opacity-[50%] rounded-[50%]'>
                <i className="fa-regular fa-bookmark ml-[14px] mt-[12px] text-white"></i>
              </span>
              <img src={movie.poster.url} alt={movie.title} className='rounded-xl w-full h-[174px]' />
              <h3 className='text-white font-bold'>{movie.year} Movie PG</h3>
              <h3 className='text-white font-bold'>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p className='text-white text-xl'>Loading movies...</p>
        )}
      </div>
    </div>
  );
}

export default Recomended;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

const Row = ({title, fetchUrl}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchUrl])

  console.log(movies)

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {
            movies.map((item, id) => (
              <Movie key={id} item={item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Row;

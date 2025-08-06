import React from 'react'
import FeaturedMovie from '@/app/componenets/featured-movie'

function MovieContainer({ movie, trailer }) {
  return <FeaturedMovie movie={movie} trailer={trailer} isCompact={false} />;
}

export default MovieContainer
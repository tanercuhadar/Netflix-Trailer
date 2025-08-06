import React from 'react'
import MovieContainer from '@/app/containers/movie'
import Movies from '../../../../mocks/movies.json'
import { notFound } from 'next/navigation'

const API_URL = 'https://api.themoviedb.org/3';

const getMovie = async (movieId) => {
    const res = await fetch(
        `${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    return res.json();
}

const getMovieTrailer = async (movieId) => {
    const res = await fetch(
        `${API_URL}/movie/${movieId}/videos?api_key=${process.env.API_KEY}`
    );

    return res.json();
}

async function MoviePage({ params, searchParams }) {

    const movieDetails = await getMovie(params.id);
    const trailerData = await getMovieTrailer(params.id);

    // YouTube trailer'ını bul
    const youtubeTrailer = trailerData.results?.find(video =>
        video.site === 'YouTube' && video.type === 'Trailer'
    );

    if (!movieDetails) {
        notFound()
    }
    if (searchParams.error === 'true') {
        throw new Error('Error')
    }

    return (
        <MovieContainer movie={movieDetails} trailer={youtubeTrailer} />
    )
}

export default MoviePage
import Image from "next/image";
import Link from "next/link";
import HomeContainer from "../containers/home";
import Movies from "../../../mocks/movies.json";
import Genres from "../../../mocks/genres.json";

const API_URL = 'https://api.themoviedb.org/3';

const getSingleCategory = async (genreId) => {
    const res = await fetch(
        `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
    );

    return res.json();
}

const getTopRatedMovies = async () => {
    const res = await fetch(
        `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
    );

    return res.json();
}

const getPopularMovies = async () => {
    const res = await fetch(
        `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
    );

    return res.json();
}

const getCategoriesMovies = async () => {
    const res = await fetch(
        `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
    );

    return res.json();
}

export default async function Home({ params }) {


    const topRatedPromise = getTopRatedMovies();
    const popularPromise = getPopularMovies();
    const categoriesPromise = getCategoriesMovies();

    const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise]);


    let selectedCategory = null;

    if (params.category?.length > 0) {
        const categoryId = parseInt(params.category[0]);

        // Kategori bilgisini bul
        const category = categories.find(cat => cat.id === categoryId);

        // Kategori filmlerini al
        const { results } = await getSingleCategory(params.category[0]);

        selectedCategory = {
            id: categoryId,
            name: category?.name || 'Unknown Category',
            movies: results
        };
    }

    return (
        <div>
            <HomeContainer
                categories={categories}
                popularMovies={popularMovies}
                topRatedMovies={topRatedMovies}
                selectedCategory={selectedCategory} />
        </div>
    );
}

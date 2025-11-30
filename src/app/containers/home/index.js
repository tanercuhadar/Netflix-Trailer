import React from 'react'
import Movies from '../../../../mocks/movies.json'
import Genres from '../../../../mocks/genres.json'
import CategoryBackgrounds from '../../../../mocks/category-backgrounds.json'
import FeaturedMovie from '@/app/componenets/featured-movie'
import Categories from '@/app/componenets/categories'
import MoviesSection from '@/app/componenets/movies-section'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import styles from './styles.module.css'

function HomeContainer({ categories = [], popularMovies = [], topRatedMovies = [], selectedCategory = null }) {
    return (
        <>
            {selectedCategory ? (
                // Kategori seçildiğinde farklı görsel
                <div className={styles.categoryHero}>
                    {/* Arka plan görseli */}
                    <div
                        className={styles.categoryBackground}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.backdrop_path})`
                        }}
                    />

                    {/* Overlay */}
                    <div className={styles.categoryOverlay} />

                    {/* İçerik */}
                    <div className={styles.categoryContent}>
                        <h1 className={styles.categoryTitle}>
                            {CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.title || selectedCategory.name}
                        </h1>
                        <p className={styles.categoryDescription}>
                            {CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.overview || `En iyi ${selectedCategory.name.toLowerCase()} filmlerini keşfedin`}
                        </p>

                        {/* Butonlar */}
                        <div className={styles.categoryButtons}>
                            <Link
                                href={`/movie/${CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.id || 1}`}
                                className={styles.categoryPlayButton}
                            >
                                Play
                            </Link>
                            <button className={styles.categoryAddButton}>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Ana sayfa için normal görsel
                <FeaturedMovie movie={topRatedMovies?.[0]} />
            )}

            <Categories categories={categories.slice(0, 5)} />

            {
                selectedCategory && selectedCategory.movies.length > 0 && (
                    <MoviesSection title={selectedCategory.name} movies={selectedCategory.movies} />
                )
            }
            <MoviesSection title="Popular Movies" movies={topRatedMovies.slice(1, 7)} />

            <MoviesSection title="Your Favorites" movies={popularMovies.slice(7, 13)} />
            <MoviesSection title="For You" movies={popularMovies.slice(13, 19)} />
        </>
    )
}

export default HomeContainer
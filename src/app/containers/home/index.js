import React from 'react'
import Movies from '../../../../mocks/movies.json'
import Genres from '../../../../mocks/genres.json'
import CategoryBackgrounds from '../../../../mocks/category-backgrounds.json'
import FeaturedMovie from '@/app/componenets/featured-movie'
import Categories from '@/app/componenets/categories'
import MoviesSection from '@/app/componenets/movies-section'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

function HomeContainer({categories=[],popularMovies = [], topRatedMovies = [], selectedCategory = null }) {
    return (
        <>
            {selectedCategory ? (
                // Kategori seçildiğinde farklı görsel
                <div style={{
                    position: 'relative',
                    width: '100vw',
                    height: '140vh',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                    marginTop: '-80px',
                    overflow: 'hidden'
                }}>
                    {/* Arka plan görseli */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        zIndex: -2
                    }} />

                    {/* Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)',
                        zIndex: -1
                    }} />

                    {/* İçerik */}
                    <div style={{
                        position: 'absolute',
                        top: '200px',
                        left: '60px',
                        zIndex: 10,
                        color: 'white'
                    }}>
                        <h1 style={{
                            fontSize: '72px',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px',
                            fontWeight: '900',
                            lineHeight: '72px',
                            maxWidth: '25ch',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                            marginBottom: '20px'
                        }}>
                            {CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.title || selectedCategory.name}
                        </h1>
                        <p style={{
                            fontSize: '24px',
                            maxWidth: '50ch',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                            lineHeight: '1.4',
                            marginBottom: '30px'
                        }}>
                            {CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.overview || `En iyi ${selectedCategory.name.toLowerCase()} filmlerini keşfedin`}
                        </p>

                        {/* Butonlar */}
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center'
                        }}>
                            <Link href={`/movie/${CategoryBackgrounds.categoryBackgrounds[selectedCategory.id]?.id || 1}`} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#eee',
                                color: '#222',
                                width: '300px',
                                borderRadius: '9999px',
                                fontSize: '20px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                padding: '15px 30px'
                            }}>
                                Play
                            </Link>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #eee',
                                borderRadius: '999px',
                                width: '62px',
                                height: '62px',
                                color: '#eee',
                                fontSize: '24px',
                                background: 'transparent',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
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
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'
import VideoPlayer from '../video-player'


function FeaturedMovie({ movie = {}, trailer = null, isCompact = true }) {
    const { poster_path, backdrop_path, title, overview } = movie;
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handlePlayClick = () => {
        if (trailer) {
            setIsVideoOpen(true);
        } else {
            // Trailer yoksa film detay sayfasına git
            window.location.href = `/movie/${movie.id}`;
        }
    };

    const videoUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1` : null;

    return (
        <>
            <div className={`${styles.movieWrapper} ${isCompact ? styles.compact : ''}`}>
                <h1 className={styles.movieTitle}>{title}</h1>
                <p
                    className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
                        }`}
                >
                    {overview}
                </p>
                <div className={styles.actionButtons}>
                    <button className={styles.playButton} onClick={handlePlayClick}>
                        Play
                    </button>
                    <button className={styles.addButton}>
                        <FaPlus />
                    </button>
                </div>
                <div className={styles.moviePoster}>
                    <div className={styles.moviePosterOverlay}></div>
                    <Image
                        unoptimized
                        src={`https://image.tmdb.org/t/p/original${isCompact ? poster_path : backdrop_path || poster_path}`}
                        alt={title}
                        fill
                    />
                </div>
            </div>

            <VideoPlayer
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoUrl={videoUrl}
                title={title}
            />
        </>
    );
}

export default FeaturedMovie
'use client'

import React from 'react';
import styles from './styles.module.css';
import { FaTimes, FaPlay, FaPause, FaVolumeUp, FaExpand } from 'react-icons/fa';

function VideoPlayer({ isOpen, onClose, videoUrl, title }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className={styles.videoContainer}>
                    {videoUrl ? (
                        <iframe
                            src={videoUrl}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.videoFrame}
                        />
                    ) : (
                        <div className={styles.noVideo}>
                            <FaPlay size={48} />
                            <p>Video bulunamadı</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer; 
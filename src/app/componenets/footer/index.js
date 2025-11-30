import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Logo Section */}
                <div className={styles.footerBrand}>
                    <h3 className={styles.brandName}>NETFILMS</h3>
                    <p className={styles.brandTagline}>Your ultimate movie trailer destination</p>
                </div>

                {/* Links Section */}
                <div className={styles.footerLinks}>
                    <div className={styles.linkColumn}>
                        <h4>Quick Links</h4>
                        <Link href="/">Home</Link>
                        <Link href="/">Movies</Link>
                        <Link href="/">Popular</Link>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>About</h4>
                        <Link href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                            TMDB API
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </div>
                </div>

                {/* Social Section */}
                <div className={styles.footerSocial}>
                    <h4>Connect</h4>
                    <div className={styles.socialIcons}>
                        <Link
                            href="https://www.linkedin.com/in/taner-%C3%A7uhadar-3a6273254/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    Made with <FaHeart className={styles.heartIcon} /> by{' '}
                    <Link
                        href="https://www.linkedin.com/in/taner-%C3%A7uhadar-3a6273254/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Taner Çuhadar
                    </Link>
                </p>
                <p className={styles.tmdbCredit}>
                    Powered by <Link href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer
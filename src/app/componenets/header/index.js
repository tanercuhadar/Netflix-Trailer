'use client'

import React, { useState } from 'react'
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import styles from './styles.module.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`${styles.header} container fluid`}>
                <div className={styles.headerWrapper}>
                    <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                        <FontAwesomeIcon
                            icon={faPlayCircle}
                            style={{ color: 'red', fontSize: '24px' }}
                        />
                        <span style={{ marginLeft: '8px', color: 'white', fontWeight: 'bold' }}>NETFILMS</span>
                    </Link>

                    {/* Hamburger Menu Button */}
                    <button
                        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation Menu */}
                    <nav className={`${styles.navigationMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                        <Link href="/" onClick={closeMobileMenu}>Movies</Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.menuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
                onClick={closeMobileMenu}
            />
        </>
    )
}

export default Header
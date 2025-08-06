import React from 'react'
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import styles from './styles.module.css'

function Header() {
    console.log('faPlayCircle icon:', faPlayCircle); // Debug için

    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <FontAwesomeIcon
                        icon={faPlayCircle}
                        style={{ color: 'red', fontSize: '24px' }}
                    />
                    <span style={{ marginLeft: '8px', color: 'white', fontWeight: 'bold' }}>NETFILMS</span>
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href="/">Movies</Link>
                    <Link href="/about">Series</Link>
                    <Link href="/contact">Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
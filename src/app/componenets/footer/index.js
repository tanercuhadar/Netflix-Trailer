import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

function Footer() {
    return (
    <footer className={styles.footer}>
made with by 
<Link href ="https://www.linkedin.com/in/taner-%C3%A7uhadar-3a6273254/" target='_blank'>Taner Çuhadar </Link>


    </footer>
    )
}

export default Footer
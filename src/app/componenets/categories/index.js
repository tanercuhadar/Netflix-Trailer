import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'


function Categories({ categories }) {
    // İlk 11 kategoriyi al (Action'dan Horror'a kadar)
    const limitedCategories = categories.slice(0, 11);

    return (
        <div className={styles.categoriesWrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.categories}>
                {limitedCategories.map((category) => (
                    <Link
                        key={category.id}
                        className={styles.category}
                        href={`/${category.id}`}
                    >
                        <div className={styles.name}>{category.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Categories
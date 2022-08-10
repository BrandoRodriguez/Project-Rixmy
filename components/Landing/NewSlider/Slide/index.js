import React from 'react'
import styles from './styles.module.css';

export default function Slide({image}) {
    return (
        <div className={styles.slide}>
            <img src={`/img/${image}`} alt="" />
        </div>
    )
}
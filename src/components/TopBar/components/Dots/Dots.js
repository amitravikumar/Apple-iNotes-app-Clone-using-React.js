import React from 'react'

import styles from './Dots.module.scss'

const Dots = () => (
  <div className={styles.dots}>
    <div className={`${styles.dot} ${styles.dot__red}`} />
    <div className={`${styles.dot} ${styles.dot__yellow}`} />
    <div className={`${styles.dot} ${styles.dot__green}`} />
  </div>
)

export default Dots
import React from 'react'
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}></div>
      <form className={styles.form}></form>

      </div>
    </div>
  ) 
}

export default Contact
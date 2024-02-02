"use client"

import React from 'react'
import styles from "./page.module.css";
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => signIn("github")}>Login with GitHub</button>
    </div>
  )
}

export default Login
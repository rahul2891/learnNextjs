"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";
import { notFound } from 'next/navigation';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Dashboard = () => {
  // const [data, setData] =  useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, 
  //     {cache: "no-store",})
     
  //     if (!res.ok) {
  //       return notFound()
  //     }
  //     const data = await res.json();
  //      setData(data);
  //      setLoading(false);
  //   };
  //   getData();
  // }, [])

  const session = useSession()
  console.log("session", session)

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log("data", data)

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
          <Image 
          src="https://images.pexels.com/photos/17845443/pexels-photo-17845443/free-photo-of-sea-clouds-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          width={200} 
          height={100} 
          />
          </div>
          <h2 className={styles.postTitle}>Post Title</h2>
          <span className={styles.delete}>
                    X
                  </span>
        </div>
      </div>
      <form className={styles.new} onSubmit={()=> console.log("submoit")}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
    </div>
  )
}

export default Dashboard
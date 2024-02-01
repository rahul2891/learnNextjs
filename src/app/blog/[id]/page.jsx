import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, 
  {cache: "no-store",})
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetaData( params ) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.desc}</p>
        <div className={styles.author}>
        <Image
        src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        width={40}
        height={40}
        className={styles.avatar}
        />
        <span className={styles.username}>{data.username}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        fill={true}
        className={styles.image}
        />
      </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
          <br />
            <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Laboriosam corrupti omnis quaerat! Quod nisi explicabo, 
          perspiciatis recusandae at soluta nemo! Laboriosam autem cumque, 
          vitae saepe unde itaque iusto sit exercitationem?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Laboriosam corrupti omnis quaerat! Quod nisi explicabo, 
          perspiciatis recusandae at soluta nemo! Laboriosam autem cumque, 
          vitae saepe unde itaque iusto sit exercitationem?
        </p>
      </div>
    </div>
  )
}

export default BlogPost
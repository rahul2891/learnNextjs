import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi doloribus ea cupiditate, aliquam neque est fugit a doloremque modi error itaque earum nam incidunt possimus eum hic adipisci enim in.</p>
        <div className={styles.author}>
        <Image
        src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        width={40}
        height={40}
        className={styles.avatar}
        />
        <span className={styles.username}>Rahul Verma</span>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Laboriosam corrupti omnis quaerat! Quod nisi explicabo, 
          perspiciatis recusandae at soluta nemo! Laboriosam autem cumque, 
          vitae saepe unde itaque iusto sit exercitationem?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Laboriosam corrupti omnis quaerat! Quod nisi explicabo, 
          perspiciatis recusandae at soluta nemo! Laboriosam autem cumque, 
          vitae saepe unde itaque iusto sit exercitationem?
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
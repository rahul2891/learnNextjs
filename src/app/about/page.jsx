import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/6803525/pexels-photo-6803525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Picture of the author"
          fill={true}
          className={styles.img}
       />
       <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Coder Storytellers</h1>
        <h2 className={styles.imgDesc}>Web development is difficult, only then it is fun to do.</h2>

       </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1>Who Are We?</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
         <Button text="Contact Us" url="/contact" />
      </div>


      </div>

    </div>
  )
}
 
export default About
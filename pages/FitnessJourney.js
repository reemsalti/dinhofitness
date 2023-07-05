import React from 'react';
import Link from 'next/link';
import styles from '../styles/FitnessJourney.module.css';
import {BiArrowToLeft} from 'react-icons/bi';
import ImageSlider from '../components/Gallery/Gallery';

const FitnessJourney = () => {
  // Add your logic to display old pictures and show your progress here

  return (
    <div className={styles.main}>
      <div className={styles.backbtnwrapper}>
        <Link className={styles.backbtn} href='/#nav'><BiArrowToLeft/></Link>
      </div>
      <Link href='/' className={styles.shine} id='home'>Dinho Fitness</Link>
      <div className={styles.page}>
        <div className={styles.section}>
            <ImageSlider/>
        </div>
      </div>
    </div>
  );
};

export default FitnessJourney;

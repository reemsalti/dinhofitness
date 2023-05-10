import React, { useEffect, useState } from 'react';
import styles from './ScrollArrow.module.css';
import { BsChevronDown } from "react-icons/bs";

const ScrollArrow = () => {
    const [show, setShow] = useState(true)
    const controlArrow = () => {
        if (window.scrollY < 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlArrow)
        return () => {
            window.removeEventListener('scroll', controlArrow)
        }
    }, [])
    return (
      <>
        <a href='#nav' className={styles.arrowicon}> 
        <BsChevronDown className={`${styles.arrow}${show && styles.fade} ${styles.bounce} `}/>
        </a>
      </>
    )
}

export default ScrollArrow;
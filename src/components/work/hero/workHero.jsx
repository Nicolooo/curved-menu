'use client'
import styles from './style.module.scss'
import { useState, useEffect } from 'react';

export default function WorkHero() {

  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks).keys()].map((_, index) => {
        return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
    })
  }

  const colorize = (el) => {
    el.style.backgroundColor = '#091B63'
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 300)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p>We specialize in turning space into complexe shapes</p>
      </div>
      <div className={styles.grid}>
        {
          windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
            return <div key={index} className={styles.column}>
                {
                  getBlocks()
                }
            </div>
          })
        }
      </div>
    </div>
  )
}
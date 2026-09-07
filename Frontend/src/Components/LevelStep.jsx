import React from 'react';
import styles from '../css/levelStep.module.css';

export default function LevelStep({ level, isActive, isCompleted, onClick }) {
  const handleClick = () => {
    if (isActive || isCompleted) {
      onClick(level);
    }
  };

  return (
    <>
    <div className={styles.shadow}>
      <div
        className={`${styles.levelStep} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
        onClick={handleClick}
      >
        <img src="https://img.icons8.com/?size=100&id=60003&format=png&color=FFFFFF" alt="lesson" className={styles.starIcon} />
      </div>
      
    </div>
    </>
  );
}
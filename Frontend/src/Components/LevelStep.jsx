import {React, useState} from 'react';
import styles from '../css/levelStep.module.css';
import StartLessonDiv from './StartLessonDiv';

export default function LevelStep({ level, isActive, isCompleted, onClick }) {
  const [active, setActive] = useState(isActive);
  const handleClick = () => {
    if (active) {
      setActive(false);
    }else {
      setActive(true);
    }
  }
  return (
    <div className={styles.levelStepContainer}>
      <div className={styles.shadow}>
        <div
          className={`${styles.levelStep} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
          onClick={handleClick}
        >
          <img src="https://img.icons8.com/?size=100&id=60003&format=png&color=FFFFFF" alt="lesson" className={styles.starIcon} />
        </div>
        
      </div>
      {
        active && (
          <StartLessonDiv level={level} isActive={isActive} isCompleted={isCompleted} onClick={onClick} />
        )
      }
    </div>
  );
}
import { useState } from 'react';
import styles from '../css/levelStep.module.css';
import StartLessonDiv from './StartLessonDiv';

export default function LevelStep({ level, isActive, isCompleted, onClick }) {
  const [active, setActive] = useState(isActive);
  const [showStartLesson, setShowStartLesson] = useState(isActive);

  const handleClick = () => {
    const nextActive = !active;
    setActive(nextActive);
    if (nextActive) {
      setShowStartLesson(true);
    }
  };

  const handleAnimationEnd = () => {
    if (!active) {
      setShowStartLesson(false);
    }
  };

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
      {showStartLesson && (
        <StartLessonDiv
          level={level}
          isActive={isActive}
          isCompleted={isCompleted}
          onClick={onClick}
          isClosing={!active}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </div>
  );
}
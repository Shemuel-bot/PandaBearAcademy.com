import React from 'react';
import styles from '../css/unit.module.css';
import { useNavigate } from 'react-router-dom';
import LevelStep from './LevelStep';


export default function Unit({ unitNumber, isActive, isCompleted, onClick }) {
  const handleClick = () => {
    if (isActive || isCompleted) {
      onClick(unitNumber);
    }
  };

  return (
    <div className={styles.unitContainer}>
        <button className={styles.unitButton} onClick={handleClick}>
        Unit {unitNumber}
        </button>
        <LevelStep level={unitNumber} isActive={isActive} isCompleted={isCompleted} onClick={onClick} />
        <LevelStep level={unitNumber} isActive={isActive} isCompleted={isCompleted} onClick={onClick} />
    </div>
  )
}

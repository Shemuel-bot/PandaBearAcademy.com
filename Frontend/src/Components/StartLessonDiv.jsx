import styles from '../css/levelStep.module.css';

export default function StartLessonDiv({ level, isActive, isCompleted, onClick }) {
    return(
        <div className={styles.levelLabel} >
            <h3 className={styles.levelText}>Level {level}</h3>
            <button className={styles.levelButton} disabled={!isActive && !isCompleted}>
                Start Lesson
            </button>
        </div>
    )
}
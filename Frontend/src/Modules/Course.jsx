import styles from '../css/course.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Unit from '../Components/Unit';
import logo from '../assets/logo.jpg';
import Header from '../Components/Header';

export default function Course() {
    return(
        <div className={styles.page}>
            <div className={styles.shell}>
                <Header />
                <main className={styles.content}>
                    <section className={styles.descriptionSection}>
                        <div className={styles.description}>
                            <h1 className={styles.courseTitle}>Course Title</h1>
                            <p className={styles.courseDescription}>This is a brief description of the course</p>
                        </div>
                    </section>
                    <section className={styles.lessonsSection}>
                        
                        <div className={styles.stairCase}>
                            <Unit unitNumber={1} isActive={true} isCompleted={false} onClick={(unitNumber) => console.log(`Unit ${unitNumber} clicked`)} />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
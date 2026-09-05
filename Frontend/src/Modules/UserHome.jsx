import React from 'react';
import styles from '../css/home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function UserHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
        <header className={styles.header}>
            <div className={styles.brandBlock} onClick={() => navigate('/')}>
                <img src={logo} alt="Panda Bear Academy Logo" className={styles.brandLogo} />
                <div className={styles.brandText}>
                    <p className={styles.eyebrow}>Learning dashboard</p>
                    <h1 >Panda Bear Academy</h1>
                </div>
            </div>
            <div className={styles.headerlinks}>
                <Link to="/home" className={styles.home} >
                    <img src="https://img.icons8.com/?size=100&id=z6m63h25vYs2&format=png&color=000000" alt="Home" className={styles.headerIcon} />
                    Home
                </Link>
                <Link to="/courses" className={styles.headerlink}>
                    <img src="https://img.icons8.com/?size=100&id=3649&format=png&color=000000" alt="Courses" className={styles.headerIcon} />
                    Courses
                </Link>
            </div>
            
        </header>
        <main className={styles.content}>
            <section className={styles.section}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What do you want to learn?" />
                    <button>🔍</button>
                </div>
                <div className={styles.streak}>
                    <div className={styles.streakBadge}>
                        <h1>0 🔥</h1>
                        <p>Do 1 lesson to start a streak!!</p>
                    </div>
                    
                    <div className={styles.streakDays}>
                        <p>S🔥</p>
                        <p>M🔥</p>
                        <p>T🔥</p>
                        <p>W🔥</p>
                    </div>
                </div>
                <div className={styles.leagues}>
                    <h3>🔒</h3>
                    <h3>Unlock leagues</h3>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.courseList}>
                    <div className={styles.courseCard}>

                    </div>
                </div>
                <div className={styles.courseWidgets}>
                    <button className={styles.courseWidget}>🎂</button>
                    <button className={styles.courseWidget}>🎂</button>
                    <button className={styles.courseWidget}>🎂</button>
                </div>
            </section>
        </main>
    </div>
    );
}
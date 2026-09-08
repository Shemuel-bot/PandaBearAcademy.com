import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import styles from '../css/header.module.css';

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.brandBlock} >
                <div className={styles.brandStuff} onClick={() => navigate('/')}>         
                <img src={logo} alt="Panda Bear Academy Logo" className={styles.brandLogo} />
                <div>
                    <p className={styles.eyebrow}>Learning dashboard</p>
                    <h1>Panda Bear Academy</h1>
                </div>
                </div>
                <div className={styles.headerlinks}>
                <Link to="/home" className={styles.headerlink} >
                    <img src="https://img.icons8.com/?size=100&id=z6m63h25vYs2&format=png&color=000000" alt="Home"  className={styles.headerIcon}/>
                    Home
                </Link>
                <Link to="/courses" className={styles.courseLink}>
                    <img src="https://img.icons8.com/?size=100&id=3649&format=png&color=000000" alt="Courses" className={styles.headerIcon} />
                    Courses
                </Link>
                </div>
            </div>
            <div className={styles.headerActions}>
                <Link to="/profile" className={styles.profileLink}>
                    <img src="https://img.icons8.com/?size=100&id=JOzPdFXJKESy&format=png&color=000000" alt="Profile" className={styles.headerIcon} />
                    Profile
                </Link>
                <button className={styles.donateBtn}>
                    <img src="https://img.icons8.com/?size=100&id=5469&format=png&color=000000" alt="Donate" className={styles.headerIcon} />
                    Donate
                </button>
            </div>
        </header>
    );
}
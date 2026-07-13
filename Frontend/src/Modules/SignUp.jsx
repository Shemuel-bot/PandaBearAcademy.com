import React from 'react';
import styles from '../css/signUp.module.css';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';

export default function SignUp() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Join the community</p>
          <h1>Create your free account</h1>
          <p className={styles.copy}>
            Start your learning journey with Panda Bear Academy and unlock a world of knowledge.
          </p>
        </div>

        <div className={styles.formPanel}>
          <form className={styles.form}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleLogo} alt="Google" />
              Sign up with Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={facebookLogo} alt="Facebook" />
              Sign up with Facebook
            </button>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input type="text" id="name" name="name" className={styles.input} required />

            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="email" id="email" name="email" className={styles.input} required />

            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} required />

            <button type="submit" className={`${styles.btn} ${styles.primary}`}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
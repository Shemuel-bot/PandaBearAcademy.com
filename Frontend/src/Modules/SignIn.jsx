import styles from '../css/signIn.module.css';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import { googleAuthUrl } from '../auth.js';

export default function SignIn() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Welcome back</p>
          <h1>Sign in to continue your learning journey</h1>
          <p className={styles.copy}>
            Access your lessons, save progress, and keep building confidence with Panda Bear Academy.
          </p>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.socialRow}>
            <a href={googleAuthUrl} className={styles.socialBtn}>
              <img src={googleLogo} alt="Google" className={styles.socialIcon} />
              <span>Continue with Google</span>
            </a>
            <button type="button" className={styles.socialBtn}>
              <img src={facebookLogo} alt="Facebook" className={styles.socialIcon} />
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className={styles.divider}>
            <span>or sign in with email</span>
          </div>

          <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="email" id="email" name="email" className={styles.input} required />

            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} required />

            <button type="submit" className={`${styles.btn} ${styles.primary}`}>Sign In</button>
            <button type="button" className={`${styles.btn} ${styles.secondary}`}>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
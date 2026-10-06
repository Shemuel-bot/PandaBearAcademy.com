import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/signUp.module.css';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import { googleAuthUrl, signUpApiUrl } from '../auth.js';

export default function SignUp() {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(signUpApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          username: formData.get('username'),
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });

      if (!response.ok) {
        setError('Unable to create your account. Please check your details and try again.');
        return;
      }

      setIsRegistered(true);
    } catch {
      setError('Could not connect to the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
          {isRegistered ? (
            <div className={styles.form}>
              <p className={styles.success} role="status">Your account has been created. You can now sign in.</p>
              <Link to="/sign-in" className={`${styles.btn} ${styles.primary}`}>Go to Sign In</Link>
            </div>
          ) : <form className={styles.form} onSubmit={handleSubmit}>
            <a href={googleAuthUrl} className={styles.socialBtn}>
              <img src={googleLogo} alt="Google" />
              Sign up with Google
            </a>
            <button type="button" className={styles.socialBtn}>
              <img src={facebookLogo} alt="Facebook" />
              Sign up with Facebook
            </button>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input type="text" id="name" name="name" className={styles.input} required />

            <label htmlFor="username" className={styles.label}>Username</label>
            <input type="text" id="username" name="username" className={styles.input} minLength={2} required />

            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="email" id="email" name="email" className={styles.input} required />

            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} required />

            {error && <p className={styles.error} role="alert">{error}</p>}
            <button type="submit" className={`${styles.btn} ${styles.primary}`} disabled={isSubmitting}>
              {isSubmitting ? 'Creating account…' : 'Sign Up'}
            </button>
          </form>}
        </div>
      </div>
    </div>
  );
}
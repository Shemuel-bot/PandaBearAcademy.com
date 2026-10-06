import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/signIn.module.css';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import { googleAuthUrl, loginApiUrl } from '../auth.js';

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      });

      const result = await response.json();
      if (!response.ok || typeof result.token !== 'string') {
        setError(response.status === 401 ? 'The email or password is incorrect.' : 'Unable to sign in. Please try again.');
        return;
      }

      sessionStorage.setItem('authToken', result.token);
      if (result.user && typeof result.user.email === 'string') {
        sessionStorage.setItem('authUser', JSON.stringify({
          name: typeof result.user.name === 'string' ? result.user.name : '',
          email: result.user.email,
        }));
      }
      navigate('/home', { replace: true });
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

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="email" id="email" name="email" className={styles.input} required />

            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} required />

            {error && <p className={styles.error} role="alert">{error}</p>}
            <button type="submit" className={`${styles.btn} ${styles.primary}`} disabled={isSubmitting}>
              {isSubmitting ? 'Signing in…' : 'Sign In'}
            </button>
            <Link to="/sign-up" className={`${styles.btn} ${styles.secondary}`}>Create account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
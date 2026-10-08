import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { authMeApiUrl } from '../auth.js';

export default function RequireAuth({ children }) {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    let isActive = true;

    async function verifyAuthentication() {
      const token = sessionStorage.getItem('authToken');
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

      try {
        const response = await fetch(authMeApiUrl, {
          headers,
          credentials: 'include',
        });

        if (!isActive) return;
        if (response.status === 401) {
          sessionStorage.removeItem('authToken');
          sessionStorage.removeItem('authUser');
          setStatus('unauthenticated');
        } else if (response.ok) {
          setStatus('authenticated');
        } else {
          setStatus('error');
        }
      } catch {
        if (isActive) setStatus('error');
      }
    }

    verifyAuthentication();
    return () => {
      isActive = false;
    };
  }, []);

  if (status === 'unauthenticated') {
    return <Navigate to="/landing-page" replace />;
  }
  return (
    <>
      {status === 'error' && (
        <p role="alert">Unable to verify your sign-in right now. Please try again.</p>
      )}
      {children}
    </>
  );
}

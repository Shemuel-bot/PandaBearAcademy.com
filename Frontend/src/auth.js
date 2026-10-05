export const googleAuthUrl = new URL(
  '/auth/google',
  import.meta.env.VITE_API_URL || 'http://localhost:3000',
).toString();

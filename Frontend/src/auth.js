export const googleAuthUrl = new URL(
  '/auth/google',
  import.meta.env.VITE_AUTH_API_URL || 'https://turbo-couscous-g44j4jp5w6663pgrx-3000.app.github.dev/',
).toString();

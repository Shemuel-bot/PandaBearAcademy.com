const authApiUrl =
  import.meta.env.VITE_AUTH_API_URL || 'https://turbo-couscous-g44j4jp5w6663pgrx-3000.app.github.dev';

export const googleAuthUrl = new URL('/auth/google', authApiUrl).toString();
export const signUpApiUrl = new URL('/users/v1', authApiUrl).toString();
export const loginApiUrl = new URL('/users/v1/login', authApiUrl).toString();
export const authMeApiUrl = new URL('/auth/me', authApiUrl).toString();

export default function SignIn() {
  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form className="sign-in-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>🎮 Create Account</h1>

        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
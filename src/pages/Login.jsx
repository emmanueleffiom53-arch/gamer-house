import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🎮 Gamer Login</h1>

        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button
            type="button"
            onClick={() => {
              login(username);
              navigate("/dashboard");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
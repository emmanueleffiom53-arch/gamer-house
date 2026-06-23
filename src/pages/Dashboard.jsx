import "../styles/Dashboard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Dashboard() {
  const navigate = useNavigate();
const { user, logout } = useContext(AuthContext);
  return (
    <div className="dashboard">
      <div className="profile-card">
        <div className="avatar">🎮</div>

        <div>
          <h1>{user ? user.name : "Guest"}</h1>
          <p>Rank: Gold III</p>
          <p>Points: 2500</p>

        <button
  onClick={() => {
    logout();
    navigate("/login");
  }}
  className="logout-btn"
>
  Logout
</button>
<button onClick={() => navigate("/profile")}>
  View Profile
</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>🏆 12</h2>
          <p>Tournaments</p>
        </div>

        <div className="stat-card">
          <h2>🥇 8</h2>
          <p>Wins</p>
        </div>

        <div className="stat-card">
          <h2>🔥 67%</h2>
          <p>Win Rate</p>
        </div>
      </div>

      <div className="matches-card">
        <h2>Recent Matches</h2>

        <div className="match">
          <span>EA FC 26</span>
          <span className="win">Won +50</span>
        </div>

        <div className="match">
          <span>Valorant</span>
          <span className="loss">Lost -10</span>
        </div>

        <div className="match">
          <span>PUBG Mobile</span>
          <span className="win">Won +30</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
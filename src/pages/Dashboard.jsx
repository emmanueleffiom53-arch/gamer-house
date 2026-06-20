import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>🎮 Gamer Dashboard</h1>

      <div className="profile-card">
        <h2>Player: ShadowX</h2>
        <p>Rank: Gold III</p>
        <p>Points: 2500</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>🏆 Tournaments</h3>
          <p>12 Played</p>
        </div>

        <div className="stat-card">
          <h3>🥇 Wins</h3>
          <p>8 Wins</p>
        </div>

        <div className="stat-card">
          <h3>🔥 Win Rate</h3>
          <p>67%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
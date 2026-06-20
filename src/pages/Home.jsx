import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>GAMER HOUSE 🎮</h1>

        <p>
          Compete with gamers worldwide, join tournaments,
          climb the leaderboard and become a legend.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            Join Tournament
          </button>

          <button className="btn btn-secondary">
            Leaderboard
          </button>
        </div>
      </section>

      {/* Featured Games */}
      <section className="games-section">
        <h2>Featured Games</h2>

        <div className="games-grid">
          <div className="game-card">
            <h3>⚽ EA FC 26</h3>
            <p>Compete against top football gamers.</p>
          </div>

          <div className="game-card">
            <h3>🎯 Valorant</h3>
            <p>Join competitive tactical battles.</p>
          </div>

          <div className="game-card">
            <h3>🔫 Call of Duty</h3>
            <p>Fight for glory and rewards.</p>
          </div>

          <div className="game-card">
            <h3>🏹 PUBG Mobile</h3>
            <p>Survive and dominate the battleground.</p>
          </div>
        </div>
      </section>

      {/* Live Tournaments */}
      <section className="tournaments-section">
        <h2>🏆 Live Tournaments</h2>

        <div className="tournament-grid">
          <div className="tournament-card">
            <h3>EA FC Championship</h3>
            <p>Prize Pool: ₦50,000</p>
            <button className="btn btn-primary">
              Register
            </button>
          </div>

          <div className="tournament-card">
            <h3>Valorant Clash</h3>
            <p>Prize Pool: ₦100,000</p>
            <button className="btn btn-primary">
              Register
            </button>
          </div>

          <div className="tournament-card">
            <h3>PUBG Battle Royale</h3>
            <p>Prize Pool: ₦75,000</p>
            <button className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="leaderboard-section">
        <h2>👑 Top Players</h2>

        <div className="leaderboard-card">
          <p>🥇 ShadowX - 2500 Points</p>
          <p>🥈 KingGamer - 2200 Points</p>
          <p>🥉 ProSniper - 2000 Points</p>
        </div>
      </section>
    </>
  );
}

export default Home;
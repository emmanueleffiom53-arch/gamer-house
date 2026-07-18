function Hub() {
  return (
    <div
      style={{
        color: "white",
        padding: "40px",
        marginLeft: "20px",
      }}
    >
      <h1>📰 Gamer House Hub</h1>

      <div style={{ marginTop: "30px" }}>
        <h2>🔥 Latest Gaming News</h2>

        <div>
          <h3>🎮 GTA 6 Releases New Trailer</h3>
          <p>Rockstar reveals new gameplay footage.</p>
        </div>

        <div>
          <h3>⚔️ Valorant Adds New Agent</h3>
          <p>Players can test the newest tactical specialist.</p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>🚀 New Games To Try</h2>

        <ul>
          <li>Marvel Rivals</li>
          <li>Black Myth: Wukong</li>
          <li>Delta Force</li>
          <li>FragPunk</li>
        </ul>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>📈 Trending Games</h2>

        <ul>
          <li>EA FC 26</li>
          <li>Valorant</li>
          <li>PUBG Mobile</li>
          <li>Call of Duty</li>
        </ul>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>💬 Community Discussions</h2>

        <p>🏆 Best EA FC formations after the latest update?</p>
        <p>🎯 Is Valorant still better than CS2?</p>
        <p>🔥 What game deserves GOTY this year?</p>
      </div>
    </div>
  );
}

export default Hub;
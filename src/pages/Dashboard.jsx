import "../styles/Dashboard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const topPlayers = [
    { id: 1, name: "ShadowHunter", points: 15400 },
    { id: 2, name: "KingFifa", points: 14850 },
    { id: 3, name: "ProGamer", points: 13920 },
    { id: 4, name: "ValorantAce", points: 12600 },
    { id: 5, name: "PUBGKing", points: 11800 },
  ];

  const featuredGames = [
    "EA FC 26",
    "Valorant",
    "PUBG Mobile",
    "Call of Duty",
  ];

  return (
    <div className="dashboard">
      <div className="profile-card">
        <div className="avatar">
          {user?.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            "🎮"
          )}
        </div>

        <div>
          <h1>{user?.name || "Guest"}</h1>
          <p>Rank: {user?.rank || "Bronze I"}</p>
          <p>Points: {user?.points || 0}</p>

          <div className="dashboard-buttons">
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>

            <button
              className="profile-btn"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      <div className="leaderboard-card">
        <h2>🏆 Global Leaderboard</h2>

        {topPlayers.map((player, index) => (
          <div
            key={player.id}
            className="leaderboard-player"
          >
            <span>#{index + 1}</span>
            <span>{player.name}</span>
            <span>{player.points} pts</span>
          </div>
        ))}
      </div>

      <div className="games-card">
        <h2>🎮 Featured Games</h2>

        {featuredGames.map((game, index) => (
          <div
            key={index}
            className="game-item"
          >
            {game}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-picture">
          🎮
        </div>

        <h1>Emmanuel</h1>

        <p className="nickname">
          @ShadowHunter
        </p>

        <p className="bio">
          Competitive gamer and tournament enthusiast.
        </p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
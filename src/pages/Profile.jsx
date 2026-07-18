import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, updateProfile } = useContext(AuthContext);

  const [nickname, setNickname] = useState(user?.nickname || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");

  return (
    <div
      style={{
        color: "white",
        padding: "40px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1>Profile</h1>

      <h2>{user?.name || "Guest"}</h2>

      <p>Rank: {user?.rank || "Bronze I"}</p>
      <p>Points: {user?.points || 0}</p>

      <p>Nickname: @{user?.nickname}</p>
      <p>Bio: {user?.bio}</p>

      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "20px auto",
          border: "2px solid white",
        }}
      >
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🎮
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];

          if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePic(imageUrl);
          }
        }}
      />

      <input
        type="text"
        placeholder="Enter nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <textarea
        placeholder="Tell other gamers about yourself..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <button
        onClick={() => {
          updateProfile({
            nickname,
            bio,
            profilePic,
          });

          setNickname("");
          setBio("");

          alert("Profile Updated!");
        }}
      >
        Save Profile
      </button>
    </div>
  );
}

export default Profile;
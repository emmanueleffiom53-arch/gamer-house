import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

 const login = (username) => {
 setUser({
  name: username,
  nickname: "",
  bio: "",
  rank: "Bronze I",
  points: 0,
});
};

const updateProfile = (data) => {
  setUser((prevUser) => ({
    ...prevUser,
    ...data,
  }));
};

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
     value={{
  user,
  login,
  updateProfile,
  logout,
}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
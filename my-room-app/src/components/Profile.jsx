import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ userName, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // Call logout function passed from App.jsx
    navigate("/");  // Redirect to Home page after logging out
  };

  return (
    <div className="profile-page">
      <h1>Welcome, {userName}</h1>
      <p>This is your profile page.</p>
      <button onClick={handleLogout} className="primary-btn">
        Logout
      </button>
    </div>
  );
};

export default Profile;

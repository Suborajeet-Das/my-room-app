import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login and Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for Signup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle Login Logic
      console.log("Logging in with", { email, password });
      // Example: If login is successful, redirect to dashboard
      navigate("/profile");
    } else {
      // Handle Signup Logic
      console.log("Signing up with", { name, email, password });
      // Example: Redirect after successful signup
      navigate("/profile");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page-contents">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        {/* !isLogin when it is not logged in(isLogin == false) then only the name input will asked */}
        {!isLogin && (
          <input
            className="form-group"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          className="form-group"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-group"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
      </div>
    </div>
  );
};

export default LoginSignup;

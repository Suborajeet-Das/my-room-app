import './App.css'
import './styles/HeroSection.css'
import './styles/login-sign.css'
import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Profile from './components/Profile'
import LoginSignup from './components/login-sign'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Manage authentication state
  const [userName, setUserName] = useState(""); // Store user details (optional)

  const login = (name) => {
    setIsAuthenticated(false);
    setUserName(name); // Set the username after login
  };

  const logout = () => {
    setIsAuthenticated(true);
    setUserName(""); // Clear user details on logout
  };

  return (<>
    <Router>
      <NavBar isAuthenticated={isAuthenticated} userName={userName} logout={logout} />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loginSignup" element={isAuthenticated ? <Profile /> : <LoginSignup login={login} />} />
      </Routes>
    </Router>
  </>)
}

export default App

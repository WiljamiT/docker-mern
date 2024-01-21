import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

import text from "./strings.json";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  return (

    <Router>

      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>{text.strings.header.nav}</h1>
          <h5>Hello: <i>{!userName ? "-" : userName}</i></h5>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            {text.strings.button.home}
          </Link>
          <Link to="/create" className="navbar_link">
            {text.strings.button.share}
          </Link>

          <div className="google_btn">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                console.log(decoded);
                setIsAuthenticated(true);
                setUserName(`${decoded.name}`);
              }}
              onError={() => {
                console.log('LOGIN FAILED');
              }}
            />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/create" element={<Create />} />
      </Routes>

    </Router>


  );
}

export default App;
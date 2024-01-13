import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

import text from "./strings.json";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>{text.strings.header.nav}</h1>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            {text.strings.button.home}
          </Link>
          <Link to="/create" className="navbar_link">
          {text.strings.button.share}
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
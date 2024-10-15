import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Admin from './pages/Admin';
import Marketing from './pages/Marketing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>DeepPurple</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/admin">Admin Updates</Link></li>
              <li><Link to="/marketing">Project Overview</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/marketing" element={<Marketing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

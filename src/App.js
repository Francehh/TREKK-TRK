// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Rewards from "./pages/Rewards";
import Partners from "./pages/Partners";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-800 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">TREKK</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-yellow-300">Home</Link>
              <Link to="/explore" className="hover:text-yellow-300">Explore</Link>
              <Link to="/rewards" className="hover:text-yellow-300">Rewards</Link>
              <Link to="/partners" className="hover:text-yellow-300">Partners</Link>
              <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

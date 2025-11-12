import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App(){
  return (
      <div className="app-root">
        <nav className="nav-bar">
          <NavLink to="/about" className="nav-link">Giới thiệu</NavLink>
          <NavLink to="/" className="nav-link">Trang chính</NavLink>
        </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App
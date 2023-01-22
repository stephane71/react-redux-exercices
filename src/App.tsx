import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to={"/"}>
        <h1>Cours React / Redux</h1>
      </Link>
      <div>
        <h2>Menu</h2>
        <Link to={`/cities`}>Liste des communes</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

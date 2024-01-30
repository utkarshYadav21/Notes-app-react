import React from "react";
import "./App.css"

function Header() {
  return (
    <div className="header-container">
      <div className="top-heading">
        <h1>Notes</h1>
        <button className="mode-btn">Toggle Mode</button>
      </div>
      <input type="text" placeholder="Type to search" className="searchbar" />
    </div>
  );
}
export default Header;

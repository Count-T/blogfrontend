import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navBody">
      <navbar>
        <ul className="nav-list">
          <li class="nav-item">
            <Link to="/">Tony Blog. 😎</Link>
          </li>
          <li class="nav-item">
            <Link to="/">
              <button className="btn-link">Home</button>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/posts">
              <button className="btn-link"> Blog Posts</button>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">
              <button className="btn-link">Contact</button>
            </Link>
          </li>
        </ul>
      </navbar>
    </div>
  );
}

export default Navbar;

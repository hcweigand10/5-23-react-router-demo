import React from "react";
import { Link } from "react-router-dom"

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item px-4">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item px-4">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item px-4">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="nav-item px-4">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavTabs;

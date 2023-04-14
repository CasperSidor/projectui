import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingBag size={36} />
        </Link>
      </div>
    </div>
  );
};
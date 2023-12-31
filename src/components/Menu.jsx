import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu({ showMenu, setShowMenu }) {
  return (
    <div className={`menu ${showMenu ? "show" : ""}`}>
      <div
        className="close"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        x
      </div>
      <NavLink
        to="/"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        Counter
      </NavLink>
      <NavLink
        to="/useReducerCounter"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        useReducerCounter
      </NavLink>
      <NavLink
        to="/testErrorBoundary"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        Test Error boundary
      </NavLink>
    </div>
  );
}
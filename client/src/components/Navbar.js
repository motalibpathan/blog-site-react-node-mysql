import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const navLinks = [
    { id: 1, title: "art", to: "/?cat=art" },
    { id: 2, title: "science", to: "/?cat=science" },
    { id: 3, title: "technology", to: "/?cat=technology" },
    { id: 4, title: "cinema", to: "/?cat=cinema" },
    { id: 5, title: "design", to: "/?cat=design" },
    { id: 6, title: "food", to: "/?cat=food" },
  ];
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.to} className="link">
              <h6>{link.title}</h6>
            </Link>
          ))}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

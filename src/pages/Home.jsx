import React from "react";
import Hookes from "./Hookes";
import Rest from "./Rest";
import Map from "./Map";
import { Link } from "react-router-dom";

const Home = () => {
  const navLink = [
    { id: 1, page: "Hookes", path: "/hookes" },
    { id: 2, page: "Rest", path: "/rest" },
    { id: 3, page: "Map", path: "/map" },
    { id: 4, page: "Parent", path: "/parent" },
    { id: 5, page: "Effect", path: "/effect" },
    { id: 6, page: "Local", path: "/local" },
  ];
  return (
    <div className="home-box">
      {navLink.map((link) => (
        <Link to={link.path} key={link.id}>
          <button>Click to {link.page}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;

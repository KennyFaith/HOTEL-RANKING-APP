import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>
        CHECK OUT OUR HOTEL <Link to="/hotels/:id"> here </Link>
      </h1>
    </div>
  );
};

export default Home;
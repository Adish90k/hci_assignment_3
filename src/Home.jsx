import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"
import backimg from "./assets/2828174.jpg"

function Home() {
  return (
    <>
      <div className="mainhomecontainer">
        <div className="imagehomecontainer">
          <img
            src={backimg}
            width={'600px'}
          />
        </div>
        <div className="contenthomecontainer">
            <h2>WELCOME!</h2>
            <NavLink to="/home" className='aplabetnav'>Learn Alphabet</NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;

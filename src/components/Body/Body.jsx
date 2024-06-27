import React from "react";
import "./Body.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const Body = () => {
  return (
    <div className="box">
      <div className="main">
        <div className="first">
          <img src="/img1.svg" alt="" />
          <button className="btn btn-dark ">Download for Free</button>
        </div>

        <div className="second">
          <p className="second-f">witt.</p>
          <p className="second-s">your second brain</p>
          <p className="second-t">
            a personal assistant to organize,track and document your work
          </p>
        </div>
        <div className="third">
          <img src="/img2.webp" alt="" />
        </div>
        <div className="fourth">
          <MdOutlineSlowMotionVideo size={100} className="video-logo" />
        </div>
      </div>
    </div>
  );
};

export default Body;

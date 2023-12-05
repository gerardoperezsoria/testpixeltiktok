import React from "react";
import ReactPlayer from "react-player";
// import "./Player.css";

const Player = () => (
    //   <div className="player-wrapper">
    //     <ReactPlayer
    //       url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
    //       className="react-player"
    //       playing
    //       width="100%"
    //       height="100%"
    //       controls={false}
    //     />
    //   </div>

    // <div className="player-wrapper">
    //     <ReactPlayer
    //         url="https://www.youtube.com/watch?v=A31augvmALs"
    //         className="react-player"
    //         playing
    //         width="100%"
    //         height="100%"
    //         controls={false}
    //         loop muted autoplay=""
    //     />
    // </div>

    <div className="bg-video-wrap">
        <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" controls loop muted>
        </video>
        {/* <div className="overlay">
        </div>
        <h1>Fullscreen video background
        </h1> */}
    </div>

);

export default Player;

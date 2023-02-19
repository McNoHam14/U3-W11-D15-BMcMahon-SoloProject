import React from "react";
import "./SideBarComponent.css";
import logo from "../assets/logo.jpg";

const SideBarComponent = () => {
  return (
    <>
      <div className="col-2 d-block row" style={{ backgroundColor: "black" }}>
        <div className="container-fluid d-block side-bar">
          <img className="logo col-10 my-3 mt-4" src={logo} alt="" />
          <button className="my-2 side-bar-text d-block align-items-center">
            <i className="bi bi-house-door-fill"></i>
            Home
          </button>
          <button
            className="my-2 side-bar-text side-bar-search d-block"
            onClick="searchBarVisible()"
          >
            <i className="bi bi-search"></i>
            Search
          </button>
          <button className="my-2 side-bar-text d-block">
            <i className="bi bi-music-note-list"></i>
            Your Library
          </button>
          <button className="my-2 side-bar-text d-block">
            <i className="bi bi-plus-square-fill"></i>
            Create Playlist
          </button>
          <button className="my-2 side-bar-text d-block">
            <i className="bi bi-heart-fill"></i>
            Liked Songs
          </button>
          {/* <hr> */}
          <button className="my-2 side-bar-text d-block align-items-center playlist">
            <i className="bi bi-file-earmark-music-fill"></i>
            Fara's Playlist
          </button>
          <button className="my-2 side-bar-text d-block align-items-center playlist">
            <i className="bi bi-file-earmark-music-fill"></i>
            Ben's Playlist
          </button>
          <button className="my-2 side-bar-text d-block align-items-center playlist">
            <i className="bi bi-file-earmark-music-fill"></i>
            Sam's Playlist
          </button>
          <button className="my-2 side-bar-text d-block align-items-center playlist">
            <i className="bi bi-file-earmark-music-fill"></i>
            Marius Playlist
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBarComponent;

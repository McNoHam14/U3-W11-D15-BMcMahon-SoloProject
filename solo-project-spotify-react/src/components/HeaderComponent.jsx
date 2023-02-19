import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearch } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const searchFunction = (e) => {
    navigate("/search");
    dispatch(setSearch(e.target.value));
  };
  return (
    <>
      <Container>
        <Navbar fixed="top" bg="black" expand="lg">
          <div className="container-fluid col-10" id="container">
            <div
              className="col-12 d-flex top-bar justify-content-between align-items-center mt-2 mb-3"
              id="header"
            >
              <div className="topbar-btn-col row d-flex justify-content-between">
                <div class="col-1 d-flex align-items-center arrow-bg">
                  <i
                    class="bi bi-chevron-left arrow"
                    onclick="loadSections()"
                  ></i>
                </div>
                <div class="col-1 d-flex align-items-center arrow-bg">
                  <i
                    class="bi bi-chevron-right arrow"
                    onclick="loadSections()"
                  ></i>
                </div>
                <div class="search-bar row col ml-4">
                  <div class="input-group flex-nowrap d-none" id="input">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="addon-wrapping">
                        <i class="bi bi-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="search-input"
                      class="form-control rounded-pill"
                      placeholder="What do you want to listen to?"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
              <input
                type="text"
                id="searchbar"
                placeholder="Search music here"
                onChange={(e) => searchFunction(e)}
              />
              <div class="topbar-user row ">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle rounded-pill text-white"
                    id="button"
                    type="button"
                    data-toggle="dropdown"
                  >
                    {" "}
                    {/* <img class="user-img mr-2 ml-n2" src={avatar} alt="" /> */}
                    <span class="text-white mml-2">John Doe</span>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu bg-dark ">
                    <li>Account</li>
                    <li>Profile</li>
                    <li>Sign Out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </Container>
    </>
  );
};

export default HeaderComponent;

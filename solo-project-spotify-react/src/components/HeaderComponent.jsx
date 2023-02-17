import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearch } from "../redux/actions";
import { useDispatch } from "react-redux";

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
      <input
        type="text"
        id="searchbar"
        placeholder="Search music here"
        onChange={(e) => searchFunction(e)}
      />
    </>
  );
};

export default HeaderComponent;

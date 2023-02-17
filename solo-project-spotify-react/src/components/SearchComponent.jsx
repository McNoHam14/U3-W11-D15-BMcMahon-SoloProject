import React from "react";
import { fetchSearch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../redux/actions";

const SearchComponent = () => {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchQuery);
  const navigate = useNavigate();
  //   const searchFunction = (e) => {
  //     navigate("/search");
  //     dispatch(setSearch(e.target.value));
  //   };

  useEffect(() => {
    dispatch(fetchSearch(searchValue));
  }, [searchValue]);

  return (
    <>
      <h1>Hello</h1>
      {/* <input
        type="text"
        id="search"
        placeholder="search here"
        onChange={(e) => searchFunction(e)}
      /> */}
      <div>
        {searchData.data.slice(0, 20).map((album) => (
          <div>
            <h4>{album.artist.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchComponent;

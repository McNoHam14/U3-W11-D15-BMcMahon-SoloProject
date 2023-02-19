import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../redux/actions";

export default function MainComponent() {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchquery);

  useEffect(() => {
    dispatch(fetchSearch(searchValue));
  }, [searchValue]);

  return (
    <>
      <div className="row" style={{ backgroundColor: "black" }}>
        {searchData.data ? (
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h3>Best Result:</h3>
              </div>
              <div className="col-9 pl-5">
                <h3>Songs:</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <Link to={`/album/${searchData.data[0].album.id}`}>
                  <div>
                    <img src={searchData.data[0].album.cover_medium} alt="" />
                    <h3>{searchData.data[0].album.title}</h3>
                    <p>{searchData.data[0].artist.name}</p>
                  </div>
                </Link>
              </div>
              <div className="col-9">
                <ul>
                  {searchData.data.slice(0, 6).map((song) => (
                    <li>
                      <span className="row col-12">
                        <img src={song.album.cover_small} alt="" />
                        <div className="col-10">
                          <span>{song.artist.name} </span>
                          <span>{song.title}</span>
                        </div>
                        <span className="duration"></span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-light">Albums</h2>
            <div className="row">
              {searchData.data.slice(0, 6).map((album) => (
                <Link to={`/album/${album.album.id}`} className="col-2">
                  <div className="col-12">
                    <div>
                      <img src={album.album.cover_medium} alt={""} />
                      <h5>{album.album.title}</h5>
                      <p>{album.artist.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <h2 className="text-light">Artists</h2>
            <div className="row">
              {searchData.data.slice(0, 6).map((artist) => (
                <Link to={`/artist/${artist.artist.id}`} className="col-2">
                  <div className="col-12">
                    <div>
                      <img src={artist.artist.picture_medium} alt={""} />
                      <h5>{artist.artist.name}</h5>
                      <p>Artist</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

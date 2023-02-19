import React from "react";
import { fetchSearch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../redux/actions";
import { Container, Row, Col, Card } from "react-bootstrap";

const SearchComponent = () => {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchquery);
  const navigate = useNavigate();
  const searchFunction = (e) => {
    navigate("/search");
    dispatch(setSearch(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchSearch(searchValue));
  }, [searchValue]);

  return (
    <>
      <Container>
        <input
          type="text"
          id="search"
          placeholder="search here"
          onChange={(e) => searchFunction(e)}
        />
        <Row>
          {searchData.data.slice(0, 20).map((album) => (
            <Col xs={3}>
              <Card>
                <h4>{album.artist.name}</h4>
                <img src={album.artist.picture} alt="artist pic" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchComponent;

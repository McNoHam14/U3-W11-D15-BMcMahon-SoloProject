export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_SEARCH = "SET_SEARCH";

export const setSearch = (searchQuery) => {
  return {
    type: SET_SEARCH,
    payload: searchQuery,
  };
};

export const fetchSearch = (value) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${value}`
    );

    const fetchedData = await response.json();
    dispatch({
      type: FETCH_SEARCH,
      payload: fetchedData,
    });
  };
};

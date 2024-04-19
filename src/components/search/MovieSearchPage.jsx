import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getRequest } from "../../shared/httpRequest"
import { searchMovies } from "../../redux/actions/movieActions";
import CircularProgress from '@mui/material/CircularProgress';
// Data grid to show list of movie search results, but use whatever you like here.
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchBar from "../shared/SearchBar";
import Loader from "../shared/Loader";
import MovieList from "./MovieList";
import { baseurl, apiKey } from "../../constant";

// Text field to allow user to enter search text, but use whatever you like here. 

const MovieSearchPage = (props) => {
  // Use hooks to retrieve list of movies based on user input of search text.  After user enters 4th character in search box,
  // retrieval should happen automatically.
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  // Render search results here.  Refer to README for specifications.
  const dispatch = useDispatch();
  const getSerchData = async (searchText, pageIndex = 1) => {
    setisLoading(true);
    const url = `${baseurl}?s=${searchText}&apikey=${apiKey}&page=${pageIndex}`;
    const result = await getRequest(url);
    if (result.data.Response == "True") {
      dispatch(searchMovies(result.data.Search, searchText, ""));
      setTotalResult(result.data.totalResults)
    }
    else {
      dispatch(searchMovies(null, searchText, result.data.Error));
    }
    setisLoading(false);
    setPage(pageIndex)
  }
  const handleSearch = async (searchText) => {
    await getSerchData(searchText);
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {isLoading ? <Loader /> : <MovieList totalResult={totalResult}
        getSerchData={getSerchData}
        page={page} />}
    </>
  )
};

export default MovieSearchPage;

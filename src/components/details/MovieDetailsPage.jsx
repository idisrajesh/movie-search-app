import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
// Grid referenced here for usage of a details page, but feel free to
// use whatever you like for this.
import { Button } from "@mui/material";
import "./MovieDetailPage.css";
import { baseurl, apiKey } from "../../constant";
import Loader from "../shared/Loader";
import { getRequest } from "../../shared/httpRequest";

const MovieDetailsPage = (props) => {
  // Use hooks to retrieve the details using the imdbID, passed as the parameter id
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const state = useSelector(state => state);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const url = `${baseurl}?i=${id}&apikey=${apiKey}`;
    setisLoading(true);
    getRequest(url).then(result => {
      setSelectedMovie(result.data)
      setisLoading(false)
    }).catch(() => setisLoading(false))
  }, [])
  // render details view
  return selectedMovie != null ? (
    <>{isLoading ? <Loader /> :
      <div className='movie-header'>
        <div>
          <img
            src={selectedMovie?.Poster}
            alt={selectedMovie?.title}
            loading="lazy"
            className='movie-image'
          />
        </div>
        <div>
          Title:{selectedMovie?.Title}
        </div>
        <div>
          Year:{selectedMovie?.Year}
        </div>
        <div>
          Director:{selectedMovie.Director}
        </div>
        <div>
          Genre:{selectedMovie.Genre}
        </div>
        <div>
          imdbRating:{selectedMovie.imdbRating}
        </div>
        <div>
          <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>}</>
  ) : (<div>No Movie Selected</div>)
};

export default MovieDetailsPage;

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieSearchPage from "./components/search/MovieSearchPage";
import MovieDetailsPage from "./components/details/MovieDetailsPage";

import "./styles.css";

const App = (props) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieSearchPage />} />
        <Route path="/details/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;

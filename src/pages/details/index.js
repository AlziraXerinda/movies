import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Appbar from "../../components/appbar";
import BackButton from "../../components/backButton";
import DetailsMovies from "../../components/details";
import Movies from "../../components/listMovies";
import Search from "../../components/search";

//var imdbID;

//const MOVIE_API_URL = `http://www.omdbapi.com/?i=${imdbID}&apikey=2fed31db`;

const DetailsPage = () => {
  var imdbID = window.location.href.split("/").pop();
  //const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=2fed31db`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovie(jsonResponse);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Appbar details="  >  Details" />
      <BackButton />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>
            {" "}
            <center>
              <Spinner className="spinner" animation="border" />{" "}
            </center>
          </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <DetailsMovies movie={movie} />
        )}
      </div>
    </div>
  );
};

export default DetailsPage;

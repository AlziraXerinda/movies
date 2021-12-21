import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar";
import Movies from "../../components/listMovies";
import Search from "../../components/search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=woman&apikey=2fed31db";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [valor, setValor] = useState("woman");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${valor}&apikey=2fed31db`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    setValor(searchValue);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=2fed31db`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Appbar />
      <Search search={search} />
      <Typography className="App-intro" color="secondary">
        Encontre aqui os melhores filmes para si!
      </Typography>
      <div className="movies mt-5">
        {loading && !errorMessage ? (
          <span>
            {" "}
            <center>
              <Spinner className="spinner" animation="border"  />{" "}
            </center>
          </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Link
              to={"/details/" + movie.imdbID}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Movies key={`${index}-${movie.Title}`} movie={movie} onc />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
/* <Link to={"/details/" + movie.imdbID} style={{textDecoration: 'none'}}>
 </Link>
*/

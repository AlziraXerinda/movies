import { Paper } from "@material-ui/core";
import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const DetailsMovies = ({ movie }) => {
console.log(movie)
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;


  
  return (
    <Paper elevation={5} className="detail-container">
      <div className="poster w-100">
      <img
          width="400"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <div className="info">
        <div className="field">
          <div className="label">
            <p className="title label-p">{movie.Title}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Descrição: <p className="label-p">{movie.Plot}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Lançado em: <p className="label-p">{movie.Released}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Duração: <p className="label-p">{movie.Runtime}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Gênero: <p className="label-p">{movie.Genre}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Avaliação da IMDB: <p className="label-p">{movie.imdbRating}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Director(es): <p className="label-p">{movie.Director}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Escritor(es): <p className="label-p">{movie.Writer}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Actor(es): <p className="label-p">{movie.Actors}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
          Idioma(s): <p className="label-p">{movie.Language}</p>
          </div>
        </div>

      </div>
    </Paper>
  );
};


export default DetailsMovies;
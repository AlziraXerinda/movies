import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  absolute1: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    color: "rgb(160, 19, 19)",
  },
}));

export default function BackButton() {
  const classes = useStyles();

  return (
    <div>
      <Link to="/home">
        <Tooltip title="Voltar" aria-label="back">
          <Fab className={classes.absolute1}>
            <ArrowBackIcon />
          </Fab>
        </Tooltip>
      </Link>
    </div>
  );
}

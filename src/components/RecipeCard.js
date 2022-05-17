import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="cardFrame">
      <div className="imgFrame">
        <img className="imgCard" src={props.img} alt={props.alt} />
      </div>

      <div className="cardInfo">
        <div className="cardInfoHeader">
          <h3>{props.name}</h3>
          <img
            src={props.countryflag}
            className="cardCountryFlag"
            alt={props.altFlag}
          />
        </div>
        <div className="cardInfoMain">
          <p>{props.description}</p>
        </div>
      </div>
      <Link className="linkCard" to={props.name} state={props.data}>
        See more!
      </Link>
    </div>
  );
};

export default RecipeCard;

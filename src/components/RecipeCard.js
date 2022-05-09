import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div class="cardMain">
        <img src={props.img} alt={props.name} />
        <ul>{props.ingredients}</ul>
      </div>
      <div class="cardFooter">
        <p>{props.instructions}</p>
      </div>
      <Link to={props.name}>See more!</Link>
    </div>
  );
};

export default RecipeCard;

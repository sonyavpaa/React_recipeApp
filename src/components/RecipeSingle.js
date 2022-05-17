import { React } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const recipe = location.state;

  return (
    <div className="singleFrame">
      <div className="backgroundImageFrame">
        <div
          className="backgroundImage"
          style={{
            backgroundImage: " url(" + recipe.image + ")",
          }}
        ></div>
        <div className="backgroundImageFrameHeader">
          <h1>{recipe.recipename}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>
      <div className="singleFrameHeader">
        <div className="countryInfo">
          <p>{recipe.country?.name}</p>
          <img
            className="singleCountryFlag"
            src={recipe.country?.flag}
            alt={recipe.country?.name}
          ></img>
        </div>
      </div>
      <div className="singleFrameMain">
        <div className="ingredients">
          <h4>You need:</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredientName}>
                {ingredient.amount} {ingredient.unit}
                {"        "}
                {ingredient.ingredientName}
              </li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h4>You do:</h4>
          <p>{recipe.instructions}</p>
        </div>
      </div>
      <Link to="/recipelist">go back</Link>
    </div>
  );
};

export default RecipeSingle;

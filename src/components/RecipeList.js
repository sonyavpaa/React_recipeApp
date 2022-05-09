import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => setData(res.data));
  }, []);

  return (
    <div className="listFrame">
      <div>
        <input type="text" placeholder="Search for recipes..." />
      </div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.name}
          name={recipe.name}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>o {ingredient}</li>
          ))}
          img={recipe.img}
        />
      ))}

      <div className="cardContainer">
        <br />
      </div>
    </div>
  );
};

//pokemon.sprites.versions["generation-v"]["black-white"]
// .animated.front_default
export default RecipeList;

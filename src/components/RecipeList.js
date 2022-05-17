import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchInput, setsearchInput] = useState("");
  const [filteredRecipes, setfilteredRecipes] = useState([]);

  const searchRecipies = (searchValue) => {
    setsearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = recipes.filter((recipe) => {
        return Object.values(recipe)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setfilteredRecipes(filteredData);
    } else {
      setfilteredRecipes(recipes);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((res) => setData(res.data), setLoading(false));
  }, []);

  if (isLoading === true) return <p>Loading...</p>;
  else
    return (
      <div className="listFrame">
        <div>
          <input
            className="searchBar"
            type="text"
            onChange={(e) => searchRecipies(e.target.value)}
            placeholder="Search for recipes..."
          />
        </div>
        <div className="cardsFrame">
          {searchInput.length > 1
            ? filteredRecipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.recipename}
                    name={recipe.recipename}
                    alt={recipe.recipename + " picture"}
                    description={recipe.description}
                    countryflag={recipe.country?.flag}
                    altFlag={recipe.country?.name}
                    data={recipe}
                    img={recipe.image}
                  />
                );
              })
            : recipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.recipename}
                    name={recipe.recipename}
                    alt={recipe.recipename + " picture"}
                    description={recipe.description}
                    countryflag={recipe.country?.flag}
                    altFlag={recipe.country?.name}
                    data={recipe}
                    img={recipe.image}
                  />
                );
              })}
        </div>
      </div>
    );
};

export default RecipeList;

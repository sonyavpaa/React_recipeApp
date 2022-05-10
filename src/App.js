import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import LayOut from "./pages/LayOut";
import RecipeList from "./components/RecipeList";
import RecipeSingle from "./components/RecipeSingle";
import AddRecipe from "./components/AddRecipe";
import "./style/style.css";

const RouterWrapper = (props) => {
  const params = useParams();
  return <RecipeSingle params={params} {...props} />;
};

const App = () => {
  let typingTimer;
  let doneTypingInterval = 500000;
  const [inputData, setInputData] = useState({
    id: null,
    recipename: "",
    description: "",
    // ingredients: [],
    // amount: [],
    // unit: [],
    image: "",
    country: "",
    instructions: "",
  });
  const [ingredientData, setingredientData] = useState({
    ingredients: [],
  });

  const inputFunc = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(inputData);
    // console.log("log that shows ingreintrData", ingredientData);
  };

  const blurfunc = (e) => {
    if (ingredientData.ingredients.includes(e.target.value)) {
      return;
    } else {
      setingredientData(
        ingredientData,
        ingredientData.ingredients.push(e.target.value)
      );
    }

    console.log(ingredientData);
  };

  const submitFunc = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/recipes", inputData)
      .catch((error) => console.log(error));
    // window.location.reload();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="recipelist" element={<RecipeList />} />
          <Route path="recipelist/:recipesingle" element={<RouterWrapper />} />
          <Route
            path="addrecipe"
            element={
              <AddRecipe
                onChange={inputFunc}
                blur={async (e) => blurfunc(e)}
                submit={(e) => submitFunc(e)}
                button="SEND"
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

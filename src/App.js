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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="recipelist" element={<RecipeList />} />
          <Route path="recipelist/:recipesingle" element={<RouterWrapper />} />
          <Route path="addrecipe" element={<AddRecipe button="SEND" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

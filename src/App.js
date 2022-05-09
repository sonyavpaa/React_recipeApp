import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Home from "./components/Home";
import LayOut from "./pages/LayOut";
import RecipeList from "./components/RecipeList";
import RecipeSingle from "./components/RecipeSingle";
import "./style/style.css";
import axios from "axios";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

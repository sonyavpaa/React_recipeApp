import axios from "axios";
import React, { useState, useEffect } from "react";

const AddRecipe = () => {
  const [data, setData] = useState({
    recipename: "",
    description: "",
    country: "",
    image: "",
    ingredients: [],
    instructions: "",
  });

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const [countries, setCountries] = useState([]);

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", amount: "", unit: "" },
  ]);

  const addMore = (e) => {
    e.preventDefault();
    const newIngredient = {
      id: ingredients.length + 1,
      ingredientName: "",
      amount: "",
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const changeCountry = (e) => {
    const countryChosen = countries.find((c) => c.name === e.target.value);
    setData({
      ...data,
      country: { flag: countryChosen.flags.svg, name: countryChosen.name },
    });
  };

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngredientData = (e, i) => {
    const { name, value } = e.target;
    const ingredientsList = [...ingredients];
    ingredientsList[i][name] = value;
    setIngredients(ingredientsList);
    setData({ ...data, ingredients: ingredients });
  };

  const submitData = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    axios
      .post("http://localhost:3001/recipes", data)
      .catch((err) => console.log(err));
    const submitMessage = document.createElement("p");
    submitMessage.innerHTML = "New recipe added!";
    document.querySelector(".submitMessage").appendChild(submitMessage);
  };

  return (
    <div>
      <div>
        <h2>Add recipe</h2>
        <div className="submitMessage"></div>
      </div>
      <form onSubmit={submitData}>
        <div className="formFrame">
          <div className="formFrameMain">
            <div className="left">
              <div className="nameUrl">
                <div className="name">
                  <label htmlFor="recipename">Recipe name</label>
                  <input
                    type="text"
                    name="recipename"
                    id="recipename"
                    onChange={changeData}
                    required
                  ></input>
                </div>

                <div className="url">
                  <label htmlFor="image">Add image url</label>
                  <input
                    type="url"
                    name="image"
                    id="image"
                    onChange={changeData}
                  />
                </div>
              </div>
              <div className="descriptionSingle">
                <label htmlFor="description">Dish Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  onChange={changeData}
                  placeholder="e.g. nice cake"
                ></textarea>
              </div>
              <div className="instructionsSingle">
                <label htmlFor="instructions">Instructions</label>
                <textarea
                  className="instructionsTextArea"
                  name="instructions"
                  id="instructions"
                  onChange={changeData}
                />
              </div>
              <div className="countrySingle">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={changeCountry}>
                  {countries.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="right">
              {ingredients.map((_, i) => {
                return (
                  <div className="ingredientFrame" key={i}>
                    <div className="ingredientNameSingle">
                      <label htmlFor="ingredientName">Ingredient name</label>
                      <input
                        type="text"
                        name="ingredientName"
                        id="ingredientName"
                        onChange={(e) => changeIngredientData(e, i)}
                        placeholder="e.g. flour"
                      />
                    </div>
                    <div className="amountUnit">
                      <div className="amountSingle">
                        <label htmlFor="amount">Amount</label>
                        <input
                          type=""
                          name="amount"
                          id="amount"
                          step=".01"
                          onChange={(e) => changeIngredientData(e, i)}
                          placeholder="e.g. 1/2"
                        />
                      </div>
                      <div className="unitSingle">
                        <label htmlFor="unit">Unit</label>
                        <select
                          type="text"
                          name="unit"
                          id="unit"
                          onChange={(e) => changeIngredientData(e, i)}
                        >
                          {" "}
                          <option value="g">g</option>
                          <option value="kg">kg</option>
                          <option value="ml">ml</option>
                          <option value="dl">dl</option>
                          <option value="l">l</option>
                          <option value="tsp">tsp</option>
                          <option value="tbsp">tbsp</option>
                          <option value="psc">psc</option>
                          <option value="bunch">bunch</option>
                          <option value="pinch">pinch</option>
                          <option value="to taste">to taste</option>
                        </select>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button onClick={addMore}>++ ingredients</button>
            </div>
          </div>
          <input className="button" type="submit" value="Add recipe" />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;

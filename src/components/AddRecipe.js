import React from "react";

const AddRecipe = (props) => {
  return (
    <div>
      <h2>Add recipe</h2>
      <form onChange={props.onChange} onSubmit={props.submit}>
        <div>
          <label htmlFor="recipename">Recipe name</label>
          <input
            type="text"
            name="recipename"
            id="recipename"
            defaultValue={props.recipename}
            required
          ></input>
        </div>
        {/* <div>
          <label htmlFor="image">Add image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/png, image/jpeg"
          />
        </div> */}
        <div>
          <label htmlFor="describtion">Dish Description</label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={props.description}
            required
          ></input>
        </div>
        <div className="ingredientFrame">
          <label htmlFor="ingredient">Ingredient</label>
          <input
            onKeyUp={props.keyup}
            onKeyDown={props.keydown}
            onBlur={props.blur}
            type="text"
            name="ingredients"
            id="ingredient"
            defaultValue={props.ingredient}
          ></input>
          <label htmlFor="ingredient">Ingredient</label>
          <input
            onChange={props.addingredient}
            onout
            type="text"
            name="ingredients"
            id="ingredient"
            defaultValue={props.ingredient}
          ></input>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            defaultValue={props.amount}
          ></input>
          <label htmlFor="units">Unit</label>
          <select name="unit" id="units" defaultValue={props.unit}>
            <option value="" onvalid="true" hidden>
              Choose unit
            </option>
            <option value="dl" name="unit">
              dl
            </option>
            <option value="g" name="unit">
              g
            </option>
            <option value="psc" name="unit">
              psc
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select name="country" id="country" defaultValue={props.country}>
            <option value="" onvalid="true" hidden>
              Choose country
            </option>
            <option value="Finland" name="country">
              Finland
            </option>
            <option value="Sweden" name="country">
              Sweden
            </option>
            <option value="Baker" name="country">
              Estonia
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            className="instructionsTextArea"
            name="instructions"
            id="instructions"
            defaultValue={props.instructions}
          ></textarea>
        </div>
        <input className="button" type="submit" value={props.button} />
      </form>
    </div>
  );
};

export default AddRecipe;

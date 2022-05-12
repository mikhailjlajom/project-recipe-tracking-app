import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [recipeData, setRecipeData] = useState({...initialState} )
  
  const handleChange = (event) => {
    setRecipeData({...recipeData, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    addRecipe(recipeData)
    setRecipeData(initialState)
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr style={{alignContent: "center"}}>
            <td htmlFor="name">
              <input 
                name="name" 
                id="name" 
                type="text" 
                onChange={handleChange} 
                placeholder="Name" 
                value={recipeData.name}
                />
            </td>
            <td>
              <input 
                name="cuisine" 
                id="cuisine" 
                type="text" 
                onChange={handleChange} 
                placeholder="Cuisine" 
                value={recipeData.cuisine}
                />
            </td>
            <td>
               <input 
                name="photo" 
                id="photo" 
                type="URL" 
                onChange={handleChange} 
                placeholder="URL" 
                value={recipeData.photo}
                />
            </td> 
            <td>
            <textarea 
              type="text"
              name="ingredients"
              id="ingredients"
              onChange={handleChange}
              placeholder="Ingredients"
              value={recipeData.ingredients}
              /> 
              </td>
            <td>
             <textarea
               type="text"
               name="preparation"
               id="preparation"
               onChange={handleChange}
               placeholder="Preparation"
               value={recipeData.prepartion}
               />
            </td> 
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

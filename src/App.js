import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  function addRecipe(newRecipe) {
    setRecipes([...recipes,newRecipe])
  }
  
  const deleteRecipe = (event) => {
    const parentId = parseInt(event.target.parentNode.parentNode.id)
    const updatedList = recipes.filter((recipe, index) => index !== parentId)
    setRecipes(updatedList)
  }
  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 style={{textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;

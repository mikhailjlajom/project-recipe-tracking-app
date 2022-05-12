import React from "react";
import AddRecipeToList from  "./AddRecipeToList"



function RecipeList({recipes, deleteRecipe}) {
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const mappedRecipe = recipes.map((recipe, index) => (
              <AddRecipeToList 
              key={index}
          recipe={recipe} 
          deleteRecipe={deleteRecipe}
          index={index}
          />
  ))
  
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{mappedRecipe}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;

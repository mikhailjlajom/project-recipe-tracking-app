import React from "react"

export default function AddRecipeTolist({recipe, index, deleteRecipe}){
const { name, cuisine, photo, ingredients, preparation } = recipe

return (
   
      <tr id={index} key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img 
          src={photo} 
          alt={photo} 
          style={{
            objectFit:"scale-down",
            width: "100%",
            height: "100%",
            }} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </td>
      </tr>
    
)
}


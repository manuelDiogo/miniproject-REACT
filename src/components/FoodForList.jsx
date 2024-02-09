import React from "react";

function FoodForList({ food }) {
  return (
    <div>
      <h3>{food.name}</h3>
      <ul>
        {food.ingredients.map((ingredient) => (
          <li >
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodForList;
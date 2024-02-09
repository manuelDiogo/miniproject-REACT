import React from "react";
// import allTheFood from "../data/allFoodForList.json";
// import { useState } from "react";

function FoodForList({ food }) {
  //const [foodItems, setFoodItems] = useState(allTheFood)

  // const deleteItem = foodId => {
  //   const filteredFood = foodItems.filter(food => {
  //     return food.id !== foodId;
  //   });
  //   setFoodItems(filteredFood);
  // }
  
  return (
    <div key={food.id}>
      <div>
      <h3>{food.name}</h3>
      <h4>Time to prepare and cook: {food.timeToCook} minutes.</h4>
      <ul>
        {food.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
      {food.timeToCook < 60 && <p>ready in a jiffy</p>}
      {food.timeToCook >= 60 && food.timeToCook < 120 && <p>put some time aside</p>}
      {food.timeToCook >= 120 && <p>best to plan ahead</p>}
      
    </div>
    </div>
  );
}

export default FoodForList;
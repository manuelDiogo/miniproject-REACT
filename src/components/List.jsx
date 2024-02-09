import React from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";
import { useState } from "react";


function List() {
  const [foodItems, setFoodItems] = useState(allTheFood)

  const deleteItem = foodId => {
    const filteredFood = foodItems.filter(food => {
      return food.id !== foodId;
    });
    setFoodItems(filteredFood);
  }

  return (
    <div className="foodList">

      {allTheFood.map((food) => (
        <FoodForList key={food.id} food={food} />

      ))}

      <button onClick={() => deleteItem(food.id)} className="deleteBtn">remove</button>

    </div>
  );
}

export default List;
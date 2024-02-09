import React from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";

function List() {
  return (
    <div className= "foodList">
      
      {allTheFood.map((food) => (
        <FoodForList key={food.id} food={food} />
      ))}
    </div>
  );
}

export default List;
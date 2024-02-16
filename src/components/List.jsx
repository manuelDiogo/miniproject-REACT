import React, { useState } from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";
import { Link } from "react-router-dom";

function List() {
  const [foodItems, setFoodItems] = useState(allTheFood);
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodIng, setNewFoodIng] = useState("");
  const [timeToCookInput, setTimeToCookInput] = useState("");
  const [stepsInput, setStepsInput] = useState("");

  const deleteItem = (foodId) => {
    const filteredFood = foodItems.filter((food) => {
      return food.id !== foodId;
    });
    setFoodItems(filteredFood);
  };

  const addItem = () => {
    const newFoodItem = {
      id: foodItems.length + 1,
      name: newFoodName,
      type: newFoodIng,
      timeToCook: timeToCookInput.trim(),
      steps: [],
    };
    setFoodItems([...foodItems, newFoodItem]);
    setNewFoodName("");
    setNewFoodIng("");
    setTimeToCookInput("");
    setStepsInput("");
  };

  return (
    <div className="foodList">

<div className="addForm">
        <input
          type="text"
          required
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="Enter food name"
        />
       
        <input
          type="number"
          value={timeToCookInput}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue < 0) {
              setTimeToCookInput(0);
            } else {
              setTimeToCookInput(inputValue);
            }
          }}
          placeholder="Enter time to cook"
        />

        <input
          type="text" 
          required
          value={newFoodIng}
          onChange={(e) => setNewFoodIng(e.target.value)}
          placeholder="Enter ingredients"
        />

        <input
          type="text" 
          required
          value={stepsInput}
          onChange={(e) => setStepsInput(e.target.value)}
          placeholder="Enter steps"
        />
        
        <button className="addBtn" onClick={addItem}>add food</button>
        
      </div>

      {foodItems.map((food) => (
        <div key={food.id}>
          <FoodForList food={food} deleteItem={deleteItem} />
        </div>

      ))}
    </div>
  );
}
export default List;
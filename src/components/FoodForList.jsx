import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function FoodForList({ food, deleteItem }) {

  const {id} = useParams()

  function toHoursAndMinutes(totalMinutes) { const minutes = totalMinutes % 60; const hours = Math. floor(totalMinutes / 60);
  return {hours, minutes}; } 

  return (
    <div className = "listElement" key={food.id}>
      <div>
        <h3 className="foodName" >{food.name}</h3>
        <span><img className="foodImg" src={food.image}></img></span>
        <h4>Time to prepare and cook: {food.timeToCook} minutes.</h4>

        

        {/* {food.ingredients && food.ingredients.length > 0 && (
          <ul>
            {food.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
        )} */}
        {food.timeToCook < 60 && <p>ready in a jiffy</p>}
        {food.timeToCook >= 60 && food.timeToCook < 120 && <p>put some time aside</p>}
        {food.timeToCook >= 120 && <p>best to plan ahead</p>}
        <button onClick={() => deleteItem(food.id)} className="deleteBtn" delete={deleteItem}>remove</button>
        <Link to={`/yes/${food.id}`} >
        <div className="stepsBtn" >show me how to do it!</div>
        </Link>
      </div>
    </div>
  );
}

export default FoodForList;
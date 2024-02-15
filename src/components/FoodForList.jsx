import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function FoodForList({ food, deleteItem }) {

  const {id} = useParams()

  

  return (
    <div className = "listElement" key={food.id}>
      <div>
      <Link to={`/yes/${food.id}`} >
        {/* {
          function toHoursAndMinutes(food.timeToCook) {
            const minutes = totalMinutes % 60;
            const hours = Math. floor(totalMinutes / 60);
          return {hours, minutes};} 
        } */}
        <div className="stepsBtn" >this one!</div>
        </Link>
        <h3 className="foodName" >{food.name}</h3>
        <span><img className="foodImg" src={food.image}></img></span>
        <h4>Time to prepare and cook: {Math.floor(food.timeToCook / 60)}h{food.timeToCook%60}.</h4>
        {food.timeToCook < 60 && <p>ready in a jiffy</p>}
        {food.timeToCook >= 60 && food.timeToCook < 120 && <p>put some time aside</p>}
        {food.timeToCook >= 120 && <p>best to plan ahead</p>}
        <button onClick={() => deleteItem(food.id)} className="deleteBtn" delete={deleteItem}>remove this!</button>
      </div>
    </div>
  );
}

export default FoodForList;
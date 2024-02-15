import { useParams } from "react-router-dom";
import React from "react";
import allTheFood from "../data/allFoodForList.json";

function Steps() {

    const {id} = useParams();

    const foodF = allTheFood.find(
        (plate) => plate.id == id
    )

    return (
        <div className="stepBox">
           <p> {foodF.name}</p>
           <p> {foodF.steps}</p>
           <ul> {foodF.ingredients.map((ingredient) => {
            return (
                <li>
                    {ingredient.name} {ingredient.quantity}
                </li>
            )
           })}
           </ul>
           <p> {foodF.ingredients.name}</p>
           
           
        

        </div>
        
    );
};

export default Steps;
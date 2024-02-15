import { useParams } from "react-router-dom";
import React from "react";
import allTheFood from "../data/allFoodForList.json";
import { useState } from "react";

function Steps() {
    const [isEditing, setSteps] = useState(false);

    const [editInput, setEditInput] = useState("");

    const { id } = useParams();

    const foodF = allTheFood.find(
        (plate) => plate.id == id
    )

    return (
        <div className="stepBox">

            {isEditing && ( 
            <form>
                <input
                    type="text" 
                    required
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    placeholder=""
                />
            </form>
            )}

            {!isEditing &&
                <div>

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
                </div>}
                <button onClick={() => setSteps(!isEditing)}>Edit Recipe</button>
        </div>
    );
};

export default Steps;
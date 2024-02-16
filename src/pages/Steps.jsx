import { useParams } from "react-router-dom";
import React from "react";
import allTheFood from "../data/allFoodForList.json";
import { useState } from "react";

function Steps() {
    const [isEditing, setSteps] = useState(false);

    const [editInputName, setEditInputName] = useState("");
    const [editInputIng, setEditInputIng] = useState("");

    const { id } = useParams();

    const handleSave = () => {

        foodF.name = editInputName.trim();

        setEditInputName(editInputName);

        foodF.ingredients.name = editInputIng.trim();

        setEditInputIng(editInputIng);

        setSteps(false);
    }

    const foodF = allTheFood.find(
        (plate) => plate.id == id
    )

    return (
        <div className="stepBox">

            {isEditing && (
                <div>
                    <form>
                        <input
                            type="text"
                            required
                            value={editInputName}
                            onChange={(e) => setEditInputName(e.target.value)}
                            placeholder=""
                        />

                        <select id="ing-select">
                        <option value="">--Please choose an option--</option>
                            {foodF.ingredients.map((ingredient) => {
                                return (
                                    <option value={editInputIng}>{ingredient.quantity} {ingredient.name}</option>
                                )
                            })}
                        </select>
                        
                         <input
                            type="text"
                            required
                            value={editInputIng}
                            onChange={(e) => setEditInputIng(e.target.value)}
                            placeholder=""
                        /> 


                    </form>
                    <button type="submit" onClick={handleSave}>Save</button>
                </div>
            )}

            {!isEditing &&
                <div>

                    <p> {foodF.name}</p>
                    <ul>{foodF.steps.map((step) => {
                        return (
                            <li>
                                {step}
                            </li>
                        )
                    })}
                    </ul>
                    <ul> {foodF.ingredients.map((ingredient) => {
                        return (
                            <li>
                                {ingredient.quantity} {ingredient.name}
                            </li>
                        )
                    })}
                    </ul>
                    <p> {foodF.ingredients.name}</p>
                    <button type="click" onClick={() => setSteps(true)}>Edit Recipe</button>
                </div>}

        </div>
    );
};

export default Steps;
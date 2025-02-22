import React, { useState } from "react";
import { createRecipe } from "../api";

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({ title: "", ingredients: "", instructions: "", image: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        createRecipe(recipe).then(() => alert("Recipe added!"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} required />
            <textarea placeholder="Instructions" onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} required />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default CreateRecipe;

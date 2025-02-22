import { fetchRecipes } from "../api";
import { useState, useEffect } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchRecipes(search).then(res => setRecipes(res.data));
    }, [search]);

    return (
        <div>
            <input type="text" placeholder="Search recipes..." onChange={(e) => setSearch(e.target.value)} />
            {recipes.map((recipe) => (
                <div key={recipe._id}>
                    <h3>{recipe.title}</h3>
                    <img src={`http://localhost:5000/${recipe.image}`} alt={recipe.title} />
                    <p>{recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
};

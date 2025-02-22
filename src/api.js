import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchRecipes = () => API.get("/recipes");
export const createRecipe = (recipe) => API.post("/recipes", recipe);

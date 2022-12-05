import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = (props) => {
  const { setError, setIsLoading } = useGlobalContext();
  const ingredients = [];
  const params = useParams();
  const [details, setDetails] = useState({});
  const drinkUrl = url + params.cocktailID;

  const fetchData = async () => {
    try {
      const response = await fetch(drinkUrl);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const finalResponse = await response.json();
      setDetails(...finalResponse.drinks);
      setError(null);
    } catch (err) {
      setError(err.message);
      setDetails(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.cocktailID]);

  for (const [key, value] of Object.entries(details)) {
    if (key.includes("strIngredient") && value !== null) {
      ingredients.push(value);
    }
  }

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to={"/"}>
        BACK HOME
      </Link>
      <h2 className="section-title">{details.strDrink}</h2>
      <div className="drink">
        <img src={details.strDrinkThumb}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {details.strDrink}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {details.strCategory}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {details.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {details.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {details.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>{" "}
            {ingredients.map((ing) => {
              return <span>{ing}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

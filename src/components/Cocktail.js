import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  console.log(props);
  return (
    <article className="cocktail">
      <div className="img-container">
        <img
          src={props.drinkDetails.strDrinkThumb}
          alt={props.drinkDetails.strDrink}
        ></img>
      </div>
      <div className="cocktail-footer">
        <h3>{props.drinkDetails.strDrink}</h3>
        <h4>{props.drinkDetails.strGlass}</h4>
        <p>{props.drinkDetails.strAlcoholic}</p>
        <Link
          className="btn btn-primary btn-details"
          to={`/cocktial/${props.drinkDetails.idDrink}`}
        >
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;

import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();

  if (!cocktails) {
    return <p>NULL</p>;
  }

  return (
    <div className="cocktails-center">
      {!isLoading ? (
        cocktails.map((drink) => {
          return <Cocktail drinkDetails={drink} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CocktailList;

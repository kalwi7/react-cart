import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCoctails] = useState([]);
  const [error, setError] = useState(null);
  const [searchingTerm, setSearchingTerm] = useState("a");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url + searchingTerm);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const finalResponse = await response.json();
      setCoctails(finalResponse.drinks);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCoctails([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchingTerm]);

  return (
    <AppContext.Provider
      value={{ cocktails, setError, setIsLoading, isLoading, setSearchingTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

import { useState, useEffect, createContext } from "react";
// import data from "../data.json";
import useFetch from "../hooks/useFetch";

export const MatchProviderContext = createContext();

export const MatchProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [userName, setUsername] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const { data: cardData , loading, error } = useFetch('http://arixplanet.com/wp-json/movie-match/api/v1/movies');
  const value = {
    cardData,
    userData,
    setUserData,
    userName,
    setUsername,
    showResult,
    setShowResult,
    showNameInput,
    setShowNameInput,
    showInstructions,
    setShowInstructions,
  };

  console.log(cardData);

  return (
    <MatchProviderContext.Provider value={value}>
      {children}
    </MatchProviderContext.Provider>
  );
};
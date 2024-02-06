import { useState, useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";

export const MatchProviderContext = createContext();

export const MatchProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [userName, setUsername] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const {
    data: cardData,
    loading,
    error,
  } = useFetch("https://arashbesharat.com/wp-json/movie-match/api/v1/movies");
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

  return (
    <MatchProviderContext.Provider value={value}>
      {children}
    </MatchProviderContext.Provider>
  );
};

import { useState, useEffect, createContext } from "react";
import films from "../movies.json";
import series from "../series.json";
export const MatchProviderContext = createContext();

export const MatchProvider = ({ children }) => {
  const [cardData, setCardData] = useState(series);
  const [userData, setUserData] = useState([]);
  const [userName, setUsername] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const value = {
    cardData,
    setCardData,
    userData,
    setUserData,
    userName,
    setUsername,
    showResult,
    setShowResult,
    showNameInput,
    setShowNameInput,
  };

  useEffect(() => {
    setCardData(series);
  }, []);

  return (
    <MatchProviderContext.Provider value={value}>
      {children}
    </MatchProviderContext.Provider>
  );
};

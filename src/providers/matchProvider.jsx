import { useState, useEffect, createContext } from "react";
import data from "../data.json";

export const MatchProviderContext = createContext();

export const MatchProvider = ({ children }) => {
  const [cardData, setCardData] = useState(data);
  const [userData, setUserData] = useState([]);
  const [userName, setUsername] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
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
    showInstructions,
    setShowInstructions,
  };

  useEffect(() => {
    setCardData(data);
  }, []);

  return (
    <MatchProviderContext.Provider value={value}>
      {children}
    </MatchProviderContext.Provider>
  );
};

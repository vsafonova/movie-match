import { useState, useEffect, createContext } from "react";
import films from "../movies.json";
import series from "../series.json";
export const MatchProviderContext = createContext();

export const MatchProvider = ({ children }) => {
  const [cardData, setCardData] = useState(series);
  const [userData, setUserData] = useState([]);
  const value = { cardData, setCardData, userData, setUserData };

  useEffect(() => {
    setCardData(series);
  }, []);

  return (
    <MatchProviderContext.Provider value={value}>
      {children}
    </MatchProviderContext.Provider>
  );
};

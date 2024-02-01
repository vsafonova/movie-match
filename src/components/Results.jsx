import { useContext, useRef } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
import { usePrepareComment } from "../hooks/usePrepareComment";

export default function ResultPage() {
  const {
    cardData,
    userData,
    userName,
    setUsername,
    showResult,
    setShowResult,
    showNameInput,
    setShowNameInput,
  } = useContext(MatchProviderContext);
  let quote = "";
  if (showResult) {
    quote = usePrepareComment(userData, cardData, userName);
  }

  return (
    <div
      className="result-page"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <h2>Your results will be here </h2>
      <div>{quote}</div>
    </div>
  );
}

import { useContext, useRef } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function ResultPage() {
  const {
    userData,
    userName,
    setUsername,
    showResult,
    setShowResult,
    showNameInput,
    setShowNameInput,
  } = useContext(MatchProviderContext);

  return (
    <div
      className="result-page"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <h2>Your results will be here </h2>
    </div>
  );
}

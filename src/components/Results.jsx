import { useContext, useRef } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
import { usePrepareComment } from "../hooks/usePrepareComment";
import useFetch from "../hooks/useFetch";

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

  const payload = { userName: userName, userData: userData };
  const { data, loading, error } = useFetch(
    "https://arixplanet.com/wp-json/movie-match/api/v1/submit",
    "POST",
    payload
  );

  console.log("RESULT", data);

  quote = usePrepareComment(userData, cardData, userName);

  return (
    <div
      className="result-page"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <h2>Your results will be here</h2>
      <div>{quote}</div>
      <div>
        <h3>Your reccomendations are</h3>
        <div>movie 1</div>
        <div>movie 2</div>
        <div>movie 3</div>
      </div>
    </div>
  );
}

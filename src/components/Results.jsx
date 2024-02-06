import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
import { prepareComment } from "../helpers/PrepareComment";
import useFetch from "../hooks/useFetch";

export default function ResultPage() {
  const { cardData, userData, userName, showResult } =
    useContext(MatchProviderContext);

  let quote = "";

  const payload = { userName: userName, userData: userData };
  const { data, loading, error } = useFetch(
    "https://arixplanet.com/wp-json/movie-match/api/v1/submit",
    "POST",
    payload
  );

  console.log("RESULT", data);

  quote = prepareComment(userData, cardData, userName);

  return (
    <div
      className="result-page"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <h2>Your results will be here</h2>
      <div>{quote[0]}</div>
      <div>{quote[1]}</div>
      <div>
        <h3>Your reccomendations are</h3>
        <div>movie 1</div>
        <div>movie 2</div>
        <div>movie 3</div>
      </div>
    </div>
  );
}

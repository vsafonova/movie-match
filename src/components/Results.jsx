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

<<<<<<< Updated upstream
  let quote = "";

  if (showResult) {
    quote = usePrepareComment(userData, cardData, userName);
  }
=======
  const [resultsLoading, setResultsLoading] = useState(true);

  let quote = "";

  const payload = { name: userName, data: userData };

  const { data, loading, error } = useFetch(
    "http://localhost/gpt/wp-json/movie-match/api/v1/submit",
    "POST",
    payload
  );

  console.log("RESULT", data);
  
  quote = usePrepareComment(userData, cardData, userName);
>>>>>>> Stashed changes

  return (
    <div
      className="result-page"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <h2>Your results will be here</h2>
      <div>{quote}</div>
    </div>
  );
}

import { useContext, useEffect } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
import { prepareComment } from "../helpers/PrepareComment";
import useFetch from "../hooks/useFetch";

export default function ResultPage() {
  const { cardData, userData, userName, showResult } = useContext(MatchProviderContext);
  const payload = { userName: userName, userData: userData };
  const { data, loading, error } = useFetch("https://arashbesharat.com/wp-json/movie-match/api/v1/submit", "POST", payload);

  const quote = prepareComment(userData, cardData, userName);

  useEffect(() => {
    console.log("Data:", data);
    console.log("Error:", error);
  }, [data, error]);

  return (
    <div className="result-page" style={{ visibility: showResult ? "visible" : "hidden" }}>
      <p className="quote text-glow">{quote && quote[0]}</p>
      <p className="quote text-glow">{quote && quote[1]}</p>
      <div>
        {loading && <img className="loading-icon" src="./loading.svg" />}
        {!loading && !error && data && (
          <div>
            <br />
            <h2>Your movie match is</h2>
            <h1 class="your-match text-glow">{!data.data ? '¯\\_(ツ)_/¯' : data.data.match}</h1>
            {data.data.recommendations && <p className="ai-recommended-title">AI recommended movies you may like</p>}
            {data.data.recommendations && <p className="ai-recommended-content text-glow">{data.data.recommendations}</p>}
          </div>
        )}
        {!loading && !error && !data && <div>No data available</div>}
        {!loading && <button className="button" onClick={() => window.location.reload()}>Restart</button>}
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
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

  const [resultsLoading, setResultsLoading] = useState(true)

  
  let quote = "";
  
  if (showResult) {
    const payload = {name: userName, data: userData}
    // const {data, loading, error} = useFetch('http://localhost/gpt/wp-json/api/v1/submit', 'POST', payload);
    
    const mockedData = {
      recommendations: 'Movie1, Movie2 and Movie3',
      loading: false,
      error: null,
      match: 'USER1'
    };
    
    console.log('RESULT', data);
    quote = usePrepareComment(userData, cardData, userName);
    setResultsLoading(loading)
  }

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
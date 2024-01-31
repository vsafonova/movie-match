import { useContext, useRef } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
import { usePrepareComment } from "../hooks/usePrepareComment";

export default function NameInput() {
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
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    setUsername(inputRef.current.value);
    inputRef.current.value = "";
    setShowNameInput(false);
    console.log(usePrepareComment(userData, cardData, userName));

    setShowResult(true);
  }

  return (
    <div
      className="name-input"
      style={{ visibility: showNameInput ? "visible" : "hidden" }}
    >
      <h2>Enter your name</h2>
      <form>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={handleSubmit}>
          See Result
        </button>
      </form>
    </div>
  );
}

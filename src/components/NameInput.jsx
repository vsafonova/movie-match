import { useContext, useRef } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function NameInput() {
  const {
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

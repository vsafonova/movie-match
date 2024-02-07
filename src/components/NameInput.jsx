import { useContext, useRef, useState } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function NameInput() {
  const { setUsername, setShowResult, showNameInput, setShowNameInput } =
    useContext(MatchProviderContext);

  const inputRef = useRef();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const username = inputRef.current.value.trim();
    if (username === "") {
      setError("Please enter your full name");
    } else {
      setUsername(username);
      inputRef.current.value = "";
      setShowNameInput(false);
      setShowResult(true);
    }
  }

  return (
    <div
      className="name-input"
      style={{ display: showNameInput ? "block" : "none" }}
    >
      <h3>OK, now enter your full name</h3>
      <form>
        <input className="username" type="text" ref={inputRef} /><br/>
        <button className="button" type="submit" onClick={handleSubmit}>
          See Result
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

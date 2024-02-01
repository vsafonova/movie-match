import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function Instructions() {
  const { showInstructions, setShowInstructions } =
    useContext(MatchProviderContext);

  function handleClick() {
    setShowInstructions(false);
  }

  return (
    <div
      style={{ visibility: showInstructions ? "visible" : "hidden" }}
      className="instructions-container"
    >
      <h1>How to play</h1>
      <h2>
        Welcome to our highly biased movie and show collection. Wondering why
        it's biased? Well, here's the scoop: this entire app is a clever
        cover-up designed for us creators to judge you based on our own personal
        tastes. As you navigate through the cards, you might stumble upon titles
        you haven't had the pleasure of watching. In such cases, feel free to
        swipe right if you'd watch it or swipe left if you're not interested,
        based on the description. No pressure, though. Consider it a casual
        stroll through our curated entertainment universe. Ready? Let the
        judgment... I mean, exploration, begin!
      </h2>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

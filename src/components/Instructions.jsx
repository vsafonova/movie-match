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
        Welcome to our highly biased movie and show collection! Wondering why
        it's biased? Well, here's the scoop: this entire app is a clever
        cover-up designed for us creators to judge you based on our own personal
        tastes. 
        As you navigate through the cards, here's how to play: swipe
        right if the movie or show catches your interest, or swipe left if it
        doesn't. If you encounter titles you haven't seen before, swipe right if
        you'd be interested in watching it, or left if it doesn't fit your
        personal taste. Base your decision on the provided description and
        genre. 
        No pressure, though. Consider it a casual stroll through our
        curated entertainment universe. Ready? Let the judgment... I mean,
        exploration, begin!
      </h2>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { MatchProviderContext } from "../providers/matchProvider";
import NameInput from "../components/NameInput";
import ResultPage from "../components/Results";
import Instructions from "../components/Instructions";
import Card from "../components/Card";

function Advanced() {
  const {
    cardData,
    userData,
    setUserData,
    showResult,
    showNameInput,
    setShowNameInput,
    showInstructions,
  } = useContext(MatchProviderContext);

  const [currentIndex, setCurrentIndex] = useState();
  const [lastDirection, setLastDirection] = useState();

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    updateCurrentIndex(cardData.length - 1);
    setShowNameInput(false);
  }, [cardData.length]);

  useEffect(() => {
    if (currentIndex < 0) {
      setShowNameInput(true);
    }
  }, [currentIndex]);

  const childRefs = useMemo(() => {
    return Array(cardData.length)
      .fill(0)

      .map((i) => React.createRef());
  }, [cardData.length]);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);

    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    // console.log(index + "was swiped " + direction);

    //logic for collecting data goes here

    if (direction === "right") {
      let obj = userData;

      obj.push(cardData[index].id);

      setUserData(obj);
    }

    setLastDirection(direction);

    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cardData.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card

  return (
    <div className="card-wrapper">
      <Instructions />
      {showResult && <ResultPage />}
      <h1 className="app-title">Movie Match</h1>
      <div
        className="card-container"
        style={{ visibility: showInstructions ? "hidden" : "visible" }}
      >
        {cardData.map((entry, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={entry.title}
            onSwipe={(dir) => swiped(dir, entry.title, index)}
            onCardLeftScreen={() => outOfFrame(entry.title, index)}
          >
            <div>
              <Card
                title={entry.title}
                description={entry.description}
                image={entry.image}
                genres={entry.genres}
              />
            </div>
          </TinderCard>
        ))}
        <NameInput />
      </div>
      <div
        className="buttons"
        style={{
          visibility: showNameInput || showInstructions ? "hidden" : "visible",
        }}
      >
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          ❌
        </button>

        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

export default Advanced;

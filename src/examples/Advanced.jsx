import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import Card from "../components/Card";
import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

function Advanced() {
  const { cardData, userData, setUserData } = useContext(MatchProviderContext);

  const [currentIndex, setCurrentIndex] = useState(cardData.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(cardData.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < cardData.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    console.log(index + "was swiped " + direction);
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
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cardData.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>Movie Match</h1>
      <div className="cardContainer">
        {cardData.map((entry, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={entry.title}
            onSwipe={(dir) => swiped(dir, entry.title, index)}
            onCardLeftScreen={() => outOfFrame(entry.title, index)}
          >
            <Card
              title={entry.title}
              description={entry.description}
              image={entry.image}
              genres={entry.genres}
            />
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          Undo swipe!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}

export default Advanced;

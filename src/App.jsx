import "./App.css";
import filmlist from "./movies.json";
import Card from "./components/Card";
import { MatchProviderContext } from "./providers/matchProvider";
import { useContext } from "react";
import TinderCard from "react-tinder-card";

function App() {
  const { cardData } = useContext(MatchProviderContext);

  function onYes() {
    console.log("yes");
  }

  function onNo() {
    console.log("no");
  }

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <>
      <div className="app-container">
        {cardData.map((film, i) => {
          return (
            <TinderCard
              key={i}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["top", "bottom"]}
            >
              <Card
                title={film.title}
                description={film.description}
                image={film.image}
                genres={film.genres}
                handleYes={onYes}
                handleNo={onNo}
              />
            </TinderCard>
          );
        })}
      </div>
    </>
  );
}

export default App;

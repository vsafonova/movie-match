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

  const onSwipe = (direction, filmTitle) => {
    console.log(`You swiped ${filmTitle} to the ${direction}`);
  };

  const onCardLeftScreen = (filmTitle, myIdentifier) => {
    console.log(`${filmTitle} left the screen (${myIdentifier})`);
  };

  return (
    <>
      <div className="app-container">
        {cardData.map((film, i) => {
          return (
            <TinderCard
              key={i}
              onSwipe={(dir) => onSwipe(dir, film.title)}
              onCardLeftScreen={() => onCardLeftScreen(film.title, "fooBar")}
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

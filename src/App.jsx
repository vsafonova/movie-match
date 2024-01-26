import "./App.css";
import filmlist from "./movies.json";
import Card from "./components/Card";
import { MatchProviderContext } from "./providers/matchProvider";
import { useContext } from "react";

function App() {
  const { cardData } = useContext(MatchProviderContext);
  console.log(JSON.stringify(cardData) + " From Context");

  let film = cardData[0];


    // <div className="card-container ">
    //     {filteredPeople.map((person, i) => {
    //       return <NameCard person={person} key={person.id} />;
    //     })}
    //   </div>
  return (
    <>
    <div>{cardData.map((film,i) => {
      return <Card title={film.title} description={film.description} image = {film.image} genres={film.genres} key={i} />
    })}</div>
    </>
  );
}

export default App;

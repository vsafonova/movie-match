import "./App.css";
import filmlist from "./movies.json";
import Card from "./components/Card";

function App() {
  console.log(filmlist);

  let film = filmlist[0];

  return (
    <>
      <Card
        title={film.title}
        description={film.description}
        image={film.image}
      ></Card>
    </>
  );
}

export default App;

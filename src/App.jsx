import "./App.css";
import filmlist from "./movies.json";
import Card from "./components/Card";

function App() {
  console.log(filmlist);

film = filmlist[0]

  return (
    <>
      <Card ></Card>
    </>
  );
}

export default App;

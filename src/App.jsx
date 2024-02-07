import "./App.css";
import Advanced from "./components/Advanced";
import { MatchProvider } from "./providers/matchProvider.jsx";

function App() {
  return (
    <div className="app">
      <MatchProvider>
        <Advanced />
      </MatchProvider>
    </div>
  );
}

export default App;
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const name = "Ryan";
  const date = "6/16/22";
  return (
    <div className="App">
      <header className="App-header">
        <Hello name={name} date={date} />
      </header>
    </div>
  );
}

export default App;

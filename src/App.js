import "./App.css";
import { Main, Nav, Search } from "./components";

const navItems = [];

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Search />
    </div>
  );
}

export default App;

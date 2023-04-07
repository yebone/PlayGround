import "./App.css";
import Navbar from "./components/Navbar";
import Test2 from "./components/Test2";
import MarketPlace from "./components/marketPlace";
import Redux from "./pages/Redux";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Redux />
      <Test2 /> */}
      <MarketPlace />
    </div>
  );
}

export default App;

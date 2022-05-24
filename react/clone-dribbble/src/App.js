import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <button id="toggle-dark-mode" type="button">&#9728;</button>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;

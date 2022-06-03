import ToggleDarkModeButton from "./components/ToggleDarkModeButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignsContainer from "./components/DesignsContainer";
import Footer from "./components/Footer";

/**
 * Main entry point of the app.
 */
function App() {
  return (
    <>
      <ToggleDarkModeButton />
      <Navbar />
      <Hero />
      <DesignsContainer />
      <Footer />
    </>
  );
}

export default App;

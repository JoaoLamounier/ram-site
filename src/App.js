import "./App.css";
import Hero from "./components/Hero.js";
import Models from "./components/Models";
import Video from "./components/Video";
import Types from "./components/Types";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div>
      <Navbar id="navbar" />
      <Hero id="hero" />
      <Sobre id="about" />
      <Timeline id="timeline" />
      <Types id="types" />
      <Video id="video" />
      <Models id="models" />
      <Footer id="footer" />
    </div>
  );
}

export default App;

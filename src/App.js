import "./App.css";
import Hero from "./components/Hero.js";
import Models from "./components/Models";
import Video from "./components/Video";
import Types from "./components/Types";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline />
      <Types />
      <Video />
      <Models />
      <Footer />
    </div>
  );
}

export default App;

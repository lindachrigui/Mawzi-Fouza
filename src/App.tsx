import HomePage from "./components/HomePage";
import "./App.css";
import Figures from "./components/Figures";
import WhyChooseUs from "./components/WhyChooseUs";
import Classes from "./components/Classes";
import Planning from "./components/Planning";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <section className="hero1">
        <HomePage />
      </section>
      <section>
        <Figures />
      </section>
      <section id="about" className="hero2">
        <WhyChooseUs />
      </section>
      <section className="hero3">
        <Classes />
      </section>
      <section className="hero4">
        <Planning />
      </section>
      <section className="hero5">
        <Footer />
      </section>

    </div>
  );
}

export default App;

import HomePage from "./components/HomePage";
import "./App.css";
import Figures from "./components/Figures";
import WhyChooseUs from "./components/WhyChooseUs";
function App() {
  return (
    <div>
      <section className="hero1">
        <HomePage />
      </section>
      <section>
        <Figures />
      </section>
      <section className="hero2">
        
      </section>
    </div>
  );
}

export default App;

import HomePage from "./components/HomePage";
import "./Page1.css";
import Figures from "./components/Figures";
import WhyChooseUs from "./components/WhyChooseUs";
import Classes from "./components/Classes";
function Page1() {
  return (
    <div>
      <section className="hero1">
        <HomePage />
      </section>
      <section>
        <Figures />
      </section>
      <section className="hero2">
        <WhyChooseUs />
      </section>
      <section className="hero3">
        <Classes />
      </section>
    </div>
  );
}

export default Page1;

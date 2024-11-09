import NavBar from "./components/NavBar";
import Workout from "./components1/Workout";
import "./Guide.css";
import Schedule from "./components1/Schedule";
import WorkoutSection from "./components1/WorkoutSection";
import Footer from "./components1/Footer";

type Schedule1 = {
  img: string;
  date: string;
  period: string;
  message: string;
};



type WorkoutSectionProp = {
  title: string;
  description: string;
  buttonText: string;
  ScheduleData: Schedule1[];  // Correct the type here to match the array of schedules
  imgSrc?: string;
};

type WorkoutSectionProps = {
  list: WorkoutSectionProp[];
};

function App() {
  const list = [
    {
      title: "Beginner Friendly",
      description: "Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.",
      buttonText: "1938+ People Tried",
      ScheduleData: [
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" }
      ],
      imgSrc: "/Message 21.png"
    },
    {
      title: "Beginner Friendly",
      description: "Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.",
      buttonText: "1938+ People Tried",
      ScheduleData: [
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" }
      ],
      imgSrc: "/Message 21.png"
    },
    {
      title: "Beginner Friendly",
      description: "Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.",
      buttonText: "1938+ People Tried",
      ScheduleData: [
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" }
      ],
      imgSrc: "/Message 21.png"
    },
    {
      title: "Beginner Friendly",
      description: "Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.",
      buttonText: "1938+ People Tried",
      ScheduleData: [
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" }
      ],
      imgSrc: "/Message 21.png"
    },
    {
      title: "Beginner Friendly",
      description: "Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.",
      buttonText: "1938+ People Tried",
      ScheduleData: [
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" },
        { img: "/Image27.png", date: "14 days", period: "20-40mins", message: "2023 Get Abs Challenge" }
      ],
      imgSrc: "/Message 21.png"
    },
    // Other items follow the same structure...
  ];

  return (
    <>
      <section className="Section">
        <NavBar />
        <div className="Div1 padd">
          <h1 className="Title1">Free Workout Programs</h1>
          <Workout />
        </div>
        <img className="img2" src="/Message 21.png" alt="Workout" />
      </section>
      {list.map((item, index) => (
        <WorkoutSection 
          key={index} 
          title={item.title} 
          description={item.description} 
          buttonText={item.buttonText} 
          ScheduleData={item.ScheduleData} // Ensure the correct name here
          imgSrc={item.imgSrc} 
        />
      ))}
      <footer>
      <Footer/>
      </footer>
      
    </>
  );
}

export default App;

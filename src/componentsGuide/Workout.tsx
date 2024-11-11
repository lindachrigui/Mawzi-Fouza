import "./Workout.css";


type Qualification = {
  text: string;
  imgSrc?: string;
};

type QualsProps = {
  qualifications: Qualification[];
};

function Workout() {
  const qualifications = [
    {
      text: "Start Now",
      imgSrc: "/Group 156.png",
    },
    {
      text: "Start Now",
      imgSrc: "/Yoga.png",
    },
    {
      text:"Start Now",
      imgSrc: "/Cardio 1.png",
    },
    {
      text: "Start Now",
      imgSrc: "/Cardio 1.png",
    },
    {
      text: "Start Now",
      imgSrc: "/Cardio 1.png",
    },
  ];

  return (
    <div className="Div3">
      {qualifications.map((item, index) => (
        <div key={index} className="Workout1">
          <div className="image-container">
          <img src={item.imgSrc} alt="Qualification" className="img1" />
          <div className="blur-overlay"><div className="overlay-text">Yassine Arfaoui</div></div></div>
          <button className="Boutton">{item.text}</button>
        </div>
      ))}
    </div>
  );
}

export default Workout;

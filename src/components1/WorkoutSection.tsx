import Schedule from "./Schedule";
import "./Schedule.css"

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
  ScheduleData: Schedule1[];
  imgSrc?: string;
};

function WorkoutSection({
  title,
  description,
  buttonText,
  ScheduleData,
  imgSrc,
}: WorkoutSectionProp) {
  return (
    <section className="Section">
      <div className="Div1">
        <h1 className="Title2">{title}</h1>
        <p className="Par1">{description}</p>
        <button className="Boutton1">{buttonText}</button>
        {/* Pass the Schedules array directly */}
        <div className="imgSchedule">
        {ScheduleData.map((item, index) => (
            <Schedule img= {item.img}
            date={item.date}
            period={item.period}
            message={item.message} />
        ))}</div>
      </div>
      <img className="img2" src={imgSrc} />
    </section>
  );
}

export default WorkoutSection;

import "./Schedule.css"

type Schedule1 = {
  img: string;
  date: string;
  period: string;
  message: string;
};



function Schedule({img,
    date,
    period,
    message,}: Schedule1) {
  return (
    <>
      {
        <div
          className="imgSchedule1"
          style={{ backgroundImage: `url(${img})`,
          backgroundSize:"Cover",
          backgroundPosition:"center",
         }}
        >
          <div className="msg1_Schedule">
            
              <h5 className="dateSchedule1 badge">
                <img className="badge-icon" src="./image 5.png" />
                {date}
              </h5>
              <h5 className="dateSchedule2 badge">
                <img className="badge-icon" src="./image 6.png" />
                {period}
              </h5>
            
            <h1 className="msg2_Schedule">{message}</h1>
          </div>
        </div>
      }
    </>
  );
}

export default Schedule;

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './watch.css'; // Import the custom CSS

const Watch = () => {
  const [time24, setTime24] = useState(new Date().toLocaleTimeString());
  const [time12, setTime12] = useState(new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }));
  const [date, setDate] = useState(new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }));
  const [is12Hour, setIs12Hour] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime24(new Date().toLocaleTimeString());
      setTime12(new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }));
      setDate(new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIs12Hour(!is12Hour);
  };

  return (
    <div className="container mt-5">
      <div className="card text-center gradient-background">
        <div className="card-body">
          
          <button class='glowing-btn'>
          <h1 className="card-title">{is12Hour ? time12 : time24}</h1>
          </button>
          <p className="card-text">{date}</p>
          <button className="btn btn-custom mt-3" onClick={handleClick}>
            {is12Hour ? "Switch to 24-hour" : "Switch to 12-hour"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;

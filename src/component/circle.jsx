import React, { useState, useEffect } from "react";
import "./circle.css";

const CircleWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [date, setDate] = useState(new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds((now.getSeconds() / 60) * 360);
      setMinutes((now.getMinutes() / 60) * 360);
      setHours(((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30);

      setDate(new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to generate hour marks
  const renderHourMarks = () => {
    const hourMarks = [];
    for (let i = 1; i <= 12; i++) {
      hourMarks.push(
        <div
          key={i}
          className="hour-mark"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
          }}
        >
          <span
            style={{
              transform: `rotate(-${i * 30}deg)`,
            }}
          >
            {i}
          </span>
        </div>
      );
    }
    return hourMarks;
  };

  // Function to generate minute marks
  const renderMinuteMarks = () => {
    const minuteMarks = [];
    for (let i = 1; i <= 60; i++) {
      minuteMarks.push(
        <div
          key={i}
          className="minute-mark"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * 6}deg)`,
          }}
        >
          <span
            style={{
              transform: `rotate(-${i * 6}deg)`,
            }}
          >
            •
          </span>
        </div>
      );
    }
    return minuteMarks;
  };

  return (
    <div className="container1">
        <div className="circle-container">
        {renderMinuteMarks()}
      {renderHourMarks()}
      <div className="circle seconds" style={{ transform: `rotate(${seconds}deg)` }}></div>
      <div className="circle minutes" style={{ transform: `rotate(${minutes}deg)` }}></div>
      <div className="circle hours" style={{ transform: `rotate(${hours}deg)` }}></div>
      
    </div>
      <p className="card-text">{date}</p>
    </div>
  );
};

export default CircleWatch;

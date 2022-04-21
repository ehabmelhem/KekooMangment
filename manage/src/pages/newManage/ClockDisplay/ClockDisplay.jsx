import { _ticker } from "gsap/gsap-core";
import React, { useState, useEffect } from "react";
import "./ClockDisplay.css";

const ClockDisplay = ({ countdownTimestampMs }) => {
  const [Seconds, setSeconds] = React.useState("");
  const [hour, sethour] = React.useState("");
  const [Minutes, setMinutes] = React.useState("");

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }
  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    sethour(formatTime(h) + h);
    setMinutes(formatTime(m) + m);
    setSeconds(formatTime(s) + s);
  }

  return (
    <section>
      <div className="clock">
        <div class="container">
          <h2 id="hour">{hour}</h2>
          <h2 class="dot">:</h2>
          <h2 id="min">{Minutes}</h2>
          <h2 class="dot">:</h2>
          <h2 id="sec">{Seconds}</h2>
          <span id="ampm">AM</span>
        </div>
      </div>
    </section>
  );
};

export default ClockDisplay;

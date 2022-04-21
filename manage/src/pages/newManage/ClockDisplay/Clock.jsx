import "./ClockDisplay.css";
import CountdownTimer from "./ClockDisplay";

function Clock() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={1659983662000} />
    </div>
  );
}

export default Clock;

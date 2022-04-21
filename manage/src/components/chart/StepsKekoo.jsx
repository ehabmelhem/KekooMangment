import React from "react";
import { Steps, Popover } from "antd";

function StepsKekoo({ currentstep, numbersteps, description }) {
  const { Step } = Steps;
  const elements = [];

  for (let i = 0; i < numbersteps; i++) {
    elements.push(i);
  }
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <Steps current={currentstep} progressDot={customDot}>
      {elements.map((value) => {
        if (value == currentstep) {
          return <Step title="In Progress" description={description} />;
        } else {
          if (value < currentstep) return <Step title="Finished" />;
          else return <Step title="Waiting" />;
        }
      })}
    </Steps>
  );
}

export default StepsKekoo;

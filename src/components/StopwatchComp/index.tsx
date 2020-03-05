import React, { useEffect, useState } from "react";
import Button from "./Button";
import Timer from "./Timer";

const StopwatchComp = () => {
  const [run, setRun] = useState(false);
  const toggleStopwatch = () => {
    setRun(!run);
  };
  useEffect(() => {}, []);
  return (
    <>
      {console.log("render компонента")}
      <h1>Function Component</h1>
      <div>
        <Button go={run} click={toggleStopwatch} />
        {run && <Timer />}
      </div>
    </>
  );
};

export default React.memo(StopwatchComp);

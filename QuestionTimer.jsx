import { useState, useEffect } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);

    return () => clearTimeout(timer);
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 100, 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}

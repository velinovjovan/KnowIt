import { useEffect, useState } from "react";
import { memo } from "react";

function QuizTimer({ dispatch }) {
  const [timer, setTimer] = useState(59);
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      dispatch({ type: "finished" });
    }
  }, [timer, dispatch]);
  return (
    <div className="mx-auto">
      <span className="mb-[2rem] mt-[-3rem] block text-2xl font-medium text-[#38bdf8]">
        00:{addLeadingZero(timer)}
      </span>
    </div>
  );
}

export default memo(QuizTimer);

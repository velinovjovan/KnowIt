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

  const isUrgent = timer <= 10;
  const isWarning = timer <= 20 && timer > 10;

  return (
    <div className="mx-auto relative mb-[-2rem] mt-8">
      <div
        className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 ${
          isUrgent
            ? "bg-red-500/40 animate-pulse"
            : isWarning
            ? "bg-orange-500/30"
            : "bg-cyan-500/20"
        }`}
        style={{ transform: "scale(1.5)" }}
      />
      <div
        className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 shadow-2xl transition-all duration-500 ${
          isUrgent
            ? "border-red-500/70 shadow-red-500/50 animate-pulse"
            : isWarning
            ? "border-orange-500/70 shadow-orange-500/30"
            : "border-cyan-500/50 shadow-cyan-500/30"
        }`}
      >
        <div
          className={`absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-full p-2 transition-all duration-500 ${
            isUrgent
              ? "bg-gradient-to-r from-red-500 to-red-600"
              : isWarning
              ? "bg-gradient-to-r from-orange-500 to-orange-600"
              : "bg-gradient-to-r from-cyan-500 to-blue-500"
          }`}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-4xl font-bold font-mono tracking-wider transition-all duration-500 ${
              isUrgent
                ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
                : isWarning
                ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
                : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            }`}
          >
            00:{addLeadingZero(timer)}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50 rounded-b-2xl overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              isUrgent
                ? "bg-gradient-to-r from-red-500 to-red-600"
                : isWarning
                ? "bg-gradient-to-r from-orange-500 to-orange-600"
                : "bg-gradient-to-r from-cyan-500 to-blue-500"
            }`}
            style={{ width: `${(timer / 59) * 100}%` }}
          />
        </div>
      </div>
      {isUrgent && (
        <p className="text-red-400 text-sm font-semibold text-center mt-2 animate-pulse">
          Hurry up! ⚠️
        </p>
      )}
    </div>
  );
}

export default memo(QuizTimer);

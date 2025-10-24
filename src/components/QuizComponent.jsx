import he from "he";
import { useState } from "react";

const decode = (string) => {
  const cleaned = string.replace(/[\u200B-\u200D\uFEFF]/g, "");
  const decoded = he.decode(cleaned);
  return decoded;
};

function QuizComponent({ question, data, gm, dispatch, score }) {
  const [enable, setEnable] = useState(true);

  const answers = [
    ...data[question].incorrect_answers,
    data[question].correct_answer,
  ].sort();

  const handleOnClick = (num) => {
    setEnable(false);

    if (answers[num] === data[question].correct_answer) {
      dispatch({ type: "score" });
    } else if (Number(gm) === 3) {
      dispatch({ type: "finished" });
    }
  };

  const handleNextQuestion = () => {
    if (question !== 19) {
      dispatch({ type: "question" });
    } else if (Number(gm) === 3) {
      dispatch({ type: "prolong" });
    } else {
      dispatch({ type: "finished" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm mt-24 mx-auto flex flex-col justify-between min-h-[25rem] max-w-[60rem] lg:w-[60rem] px-10 py-7 border-2 border-slate-700/50 rounded-2xl shadow-2xl hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-50" />
      <div className="relative z-10">
        <div className="flex justify-between text-gray-200 font-semibold text-lg mb-6">
          <p className="bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600/50">
            {Number(gm) === 3 ? score + 1 : question + 1} /{" "}
            {Number(gm) === 3 ? "♾️" : 20}
          </p>
          <p className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30">
            Score: <span className="text-cyan-400 font-bold">{score}</span>
          </p>
        </div>

        <div className="bg-slate-700/30 rounded-xl p-6 mb-10 border border-slate-600/30">
          <p className="text-white font-bold text-xl leading-relaxed">
            {decode(data[question].question)}
          </p>
        </div>

        <div className="lg:grid-cols-2 grid-cols-1 grid-rows-2 grid gap-4 mb-6 text-gray-100 font-medium">
          <button
            disabled={!enable}
            onClick={() => handleOnClick(0)}
            className={`py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-base shadow-lg relative overflow-hidden group ${
              enable
                ? "bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-cyan-500/50"
                : data[question].correct_answer === answers[0]
                ? "bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-emerald-500/50"
                : "bg-gradient-to-r from-rose-600 to-rose-700 shadow-rose-500/50"
            }`}
          >
            <span className="relative z-10">{decode(answers[0])}</span>
            {enable && (
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          <button
            disabled={!enable}
            onClick={() => handleOnClick(1)}
            className={`py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-base shadow-lg relative overflow-hidden group ${
              enable
                ? "bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-cyan-500/50"
                : data[question].correct_answer === answers[1]
                ? "bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-emerald-500/50"
                : "bg-gradient-to-r from-rose-600 to-rose-700 shadow-rose-500/50"
            }`}
          >
            <span className="relative z-10">{decode(answers[1])}</span>
            {enable && (
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          <button
            disabled={!enable}
            onClick={() => handleOnClick(2)}
            className={`py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-base shadow-lg relative overflow-hidden group ${
              enable
                ? "bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-cyan-500/50"
                : data[question].correct_answer === answers[2]
                ? "bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-emerald-500/50"
                : "bg-gradient-to-r from-rose-600 to-rose-700 shadow-rose-500/50"
            }`}
          >
            <span className="relative z-10">{decode(answers[2])}</span>
            {enable && (
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          <button
            disabled={!enable}
            onClick={() => handleOnClick(3)}
            className={`py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-base shadow-lg relative overflow-hidden group ${
              enable
                ? "bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-cyan-500/50"
                : data[question].correct_answer === answers[3]
                ? "bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-emerald-500/50"
                : "bg-gradient-to-r from-rose-600 to-rose-700 shadow-rose-500/50"
            }`}
          >
            <span className="relative z-10">{decode(answers[3])}</span>
            {enable && (
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        <div className="flex justify-end">
          <button
            disabled={enable}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 py-3 px-6 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-500/50 disabled:from-slate-600 disabled:to-slate-700 disabled:text-slate-400 disabled:shadow-none transition-all duration-300 hover:scale-105"
            onClick={handleNextQuestion}
          >
            {Number(gm) === 3
              ? "Next Question"
              : question < 19
              ? "Next Question"
              : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;

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
    <div className="bg-[#1e293b] mt-5 lg:mt-20 mx-auto flex flex-col justify-between min-h-[25rem] max-w-[60rem] lg:w-[60rem] px-10 py-7 border-3 border-[#444444] rounded-xl">
      <div className="flex justify-between text-gray-200 text-bold text-lg mb-2">
        <p>
          {Number(gm) === 3 ? score + 1 : question + 1} /{" "}
          {Number(gm) === 3 ? "♾️" : 20}
        </p>
        <p>Score: {score}</p>
      </div>
      <p className="text-white font-bold font-mono text-xl">
        {decode(data[question].question)}
      </p>
      <div className="lg:grid-cols-2 grid-cols-1 grid-rows-2 grid gap-4 my-10 text-gray-100 font-mono">
        <button
          disabled={!enable}
          onClick={() => handleOnClick(0)}
          className={`py-4 px-8 ${
            enable
              ? "bg-cyan-800"
              : data[question].correct_answer === answers[0]
              ? "bg-emerald-700"
              : "bg-rose-700"
          } rounded-xl ${
            enable ? "hover:bg-cyan-600" : ""
          } transition-colors duration-300`}
        >
          {decode(answers[0])}
        </button>
        <button
          disabled={!enable}
          onClick={() => handleOnClick(1)}
          className={`py-4 px-8 ${
            enable
              ? "bg-cyan-800"
              : data[question].correct_answer === answers[1]
              ? "bg-emerald-700"
              : "bg-rose-700"
          } rounded-xl ${
            enable ? "hover:bg-cyan-600" : ""
          } transition-colors duration-300`}
        >
          {decode(answers[1])}
        </button>
        <button
          disabled={!enable}
          onClick={() => handleOnClick(2)}
          className={`py-4 px-8 ${
            enable
              ? "bg-cyan-800"
              : data[question].correct_answer === answers[2]
              ? "bg-emerald-700"
              : "bg-rose-700"
          } rounded-xl ${
            enable ? "hover:bg-cyan-600" : ""
          } transition-colors duration-300`}
        >
          {decode(answers[2])}
        </button>
        <button
          disabled={!enable}
          onClick={() => handleOnClick(3)}
          className={`py-4 px-8 ${
            enable
              ? "bg-cyan-800"
              : data[question].correct_answer === answers[3]
              ? "bg-emerald-700"
              : "bg-rose-700"
          } rounded-xl ${
            enable ? "hover:bg-cyan-600" : ""
          } transition-colors duration-300`}
        >
          {decode(answers[3])}
        </button>
      </div>
      <button
        disabled={enable}
        className="w-fit self-end bg-cyan-500 py-2 px-3 rounded-xl font-bold disabled:bg-cyan-700 disabled:text-slate-700"
        onClick={handleNextQuestion}
      >
        {Number(gm) === 3
          ? "Next Question"
          : question < 19
          ? "Next Question"
          : "Finish"}
      </button>
    </div>
  );
}

export default QuizComponent;

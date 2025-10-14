import { Link } from "react-router-dom";

function FinishedScreen({ score, dispatch }) {
  return (
    <div className="min-h-screen flex-col flex w-full bg-gradient-to-b from-slate-800 to-sky-900 px-5 py-24">
      <p className="mx-auto text-center text-white font-bold font-mono lg:text-4xl text-xl mt-40 max-w-[61rem]">
        🎉 You’ve completed the quiz! You scored{" "}
        <span className="text-cyan-300">{score}</span>.{" "}
        {score > 10 ? "Great job" : "Nice effort"} — keep practicing to improve
        even more!
      </p>
      <div className="flex lg:gap-20 gap-5 mt-10 justify-center flex-wrap">
        <Link
          to={"/"}
          className="self-center w-fit text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go To Home Screen
        </Link>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="self-center w-fit text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Retake The Quiz
        </button>
      </div>
    </div>
  );
}

export default FinishedScreen;

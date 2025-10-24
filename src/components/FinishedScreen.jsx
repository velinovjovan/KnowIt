import { Link } from "react-router-dom";

function FinishedScreen({ score, dispatch }) {
  window.scrollTo(0, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-0 py-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-70 blur-3xl" />
      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/10 transition-all duration-500 max-w-[55rem] w-full p-10 text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-3xl md:text-5xl font-extrabold mb-10 drop-shadow-lg">
          🎉 Quiz Complete!
        </h2>
        <p className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed mb-12">
          You scored <span className="text-cyan-400 font-bold">{score}</span>.{" "}
          {score > 10 ? (
            <span className="text-emerald-400 font-semibold">
              Excellent work!
            </span>
          ) : (
            <span className="text-amber-400 font-semibold">Nice effort!</span>
          )}{" "}
          Keep practicing to sharpen your knowledge even more.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Go To Home Screen
          </Link>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            Retake The Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishedScreen;

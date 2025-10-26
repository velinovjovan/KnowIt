import { Link } from "react-router-dom";

function FinishedScreen({ score, dispatch }) {
  window.scrollTo(0, 0);

  const isExcellent = score > 15;
  const isGood = score > 10 && score <= 15;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/20 transition-all duration-500 max-w-[55rem] w-full p-12 text-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="relative mb-8 inline-block">
            <div
              className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center shadow-2xl ${
                isExcellent
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-500/50 animate-pulse"
                  : isGood
                  ? "bg-gradient-to-br from-emerald-400 to-green-600 shadow-emerald-500/50"
                  : "bg-gradient-to-br from-blue-400 to-cyan-600 shadow-blue-500/50"
              }`}
            >
              <span className="text-6xl">
                {isExcellent ? "🏆" : isGood ? "🎖️" : "⭐"}
              </span>
            </div>
            {isExcellent && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-36 h-36 border-2 border-yellow-500/30 rounded-full animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-44 h-44 border-2 border-orange-500/20 rounded-full animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                  />
                </div>
              </>
            )}
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-2xl md:text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Quiz Complete! 🎉
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-10" />
          <div className="bg-slate-700/30 rounded-2xl p-8 mb-8 border border-slate-600/30">
            <p className="text-gray-300 text-lg mb-4">Your Final Score</p>
            <div
              className={`md:text-7xl text-5xl md:text-8xl font-extrabold mb-4 ${
                isExcellent
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
                  : isGood
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              }`}
            >
              {score}/20
            </div>
            <p className="text-xl md:text-2xl font-semibold">
              {isExcellent ? (
                <span className="text-yellow-400">
                  🌟 Outstanding Performance!
                </span>
              ) : isGood ? (
                <span className="text-emerald-400">✨ Great Job!</span>
              ) : (
                <span className="text-cyan-400">💪 Nice Effort!</span>
              )}
            </p>
          </div>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {isExcellent
              ? "Incredible! You're a trivia master. Your knowledge is truly impressive!"
              : isGood
              ? "Excellent work! You've got solid knowledge. Keep it up!"
              : "Good start! Keep practicing to sharpen your trivia skills even more."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:via-cyan-500 hover:to-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
            <button
              onClick={() => dispatch({ type: "reset" })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-400 hover:via-pink-500 hover:to-purple-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-28 left-12 text-5xl opacity-20 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        🎊
      </div>
      <div
        className="absolute bottom-32 right-16 text-6xl opacity-20 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        🎉
      </div>
      <div
        className="absolute top-1/3 right-12 text-4xl opacity-20 animate-bounce"
        style={{ animationDuration: "3.5s", animationDelay: "1s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-1/4 left-16 text-5xl opacity-20 animate-bounce"
        style={{ animationDuration: "3.2s", animationDelay: "0.3s" }}
      >
        🌟
      </div>
    </div>
  );
}

export default FinishedScreen;

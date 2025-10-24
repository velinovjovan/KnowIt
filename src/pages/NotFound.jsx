import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Content Card */}
      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/20 transition-all duration-500 max-w-[40rem] w-full p-12 text-center group">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Animated 404 */}
          <div className="relative mb-6">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-8xl md:text-9xl font-extrabold drop-shadow-2xl animate-pulse">
              404
            </h1>
            {/* Glowing rings around 404 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-ping"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>

          {/* Decorative line */}
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-8" />

          <h2 className="text-gray-100 text-3xl md:text-4xl font-bold mb-6">
            Oops! Page Not Found
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-md mx-auto">
            Looks like this trivia question stumped us too! The page you're
            looking for doesn't exist.
          </p>

          {/* Suggestions */}
          <div className="bg-slate-700/30 rounded-xl p-6 mb-8 border border-slate-600/30">
            <p className="text-gray-300 text-sm mb-3">You might want to:</p>
            <ul className="text-cyan-400 text-sm space-y-2">
              <li>✓ Check the URL for typos</li>
              <li>✓ Return to the homepage</li>
              <li>✓ Start a new trivia game</li>
            </ul>
          </div>

          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:via-cyan-500 hover:to-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center gap-2">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </span>
          </Link>
        </div>
      </div>

      {/* Floating question marks */}
      <div
        className="absolute top-32 left-10 text-6xl opacity-10 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        ?
      </div>
      <div
        className="absolute bottom-32 right-16 text-7xl opacity-10 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        ?
      </div>
      <div
        className="absolute top-1/3 right-10 text-5xl opacity-10 animate-bounce"
        style={{ animationDuration: "3.5s", animationDelay: "1s" }}
      >
        ?
      </div>
    </div>
  );
}

export default NotFound;

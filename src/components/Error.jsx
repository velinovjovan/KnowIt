function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-rose-500/30 hover:shadow-rose-500/20 transition-all duration-500 max-w-[40rem] w-full p-12 text-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="relative mb-8 inline-block">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/50 animate-pulse">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-32 h-32 border-2 border-rose-500/30 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-40 h-40 border-2 border-orange-500/20 rounded-full animate-ping"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />
            </div>
          </div>

          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg pb-2">
            Oops! Something Went Wrong
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto rounded-full mb-8" />

          <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8">
            We couldn't load the quiz questions right now.
            <br />
            <span className="text-rose-400 font-semibold">
              Don't worry, it's not your fault!
            </span>
          </p>
          <div className="bg-slate-700/30 rounded-xl p-6 mb-8 border border-slate-600/30">
            <p className="text-gray-300 text-sm mb-3 font-semibold">
              What you can try:
            </p>
            <ul className="text-gray-400 text-sm space-y-2 text-left max-w-sm mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Refresh the page and try again</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Check your internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Come back in a few minutes</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-400 hover:via-pink-400 hover:to-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 group"
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
      <div
        className="absolute top-28 left-12 text-5xl opacity-10 animate-bounce text-rose-400"
        style={{ animationDuration: "3s" }}
      >
        ⚠
      </div>
      <div
        className="absolute bottom-28 right-20 text-6xl opacity-10 animate-bounce text-orange-400"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        ⚠
      </div>
      <div
        className="absolute top-1/3 right-16 text-4xl opacity-10 animate-bounce text-pink-400"
        style={{ animationDuration: "3.5s", animationDelay: "1s" }}
      >
        ⚠
      </div>
    </div>
  );
}

export default Error;

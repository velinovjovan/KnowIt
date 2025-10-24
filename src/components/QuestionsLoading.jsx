function QuestionsLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl p-12 hover:border-cyan-500/30 hover:shadow-cyan-500/20 transition-all duration-500 group min-w-[300px]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"
              style={{ transform: "scale(1.5)" }}
            />
            <div role="status" className="relative">
              <svg
                aria-hidden="true"
                className="w-24 h-24 text-slate-700 animate-spin fill-cyan-500 drop-shadow-2xl"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-32 h-32 border-2 border-cyan-500/20 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              />
            </div>
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-2xl md:text-3xl font-bold mb-4">
            Loading Questions...
          </p>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" />
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <p className="mt-6 text-gray-400 text-sm md:text-base text-center max-w-xs">
            Preparing your trivia challenge...
          </p>
        </div>
      </div>
      <div
        className="absolute top-32 left-16 text-5xl opacity-10 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        🧠
      </div>
      <div
        className="absolute bottom-32 right-20 text-6xl opacity-10 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        ❓
      </div>
      <div
        className="absolute top-1/3 right-12 text-4xl opacity-10 animate-bounce"
        style={{ animationDuration: "3.5s", animationDelay: "1s" }}
      >
        💡
      </div>
    </div>
  );
}

export default QuestionsLoading;

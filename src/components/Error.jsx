function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-70 blur-3xl" />
      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-rose-500/30 hover:shadow-rose-500/10 transition-all duration-500 max-w-[40rem] w-full p-12 text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 text-4xl md:text-6xl font-extrabold mb-10 drop-shadow-lg">
          ⚠️ Error Loading Questions
        </h2>
        <p className="text-gray-300 text-lg md:text-2xl font-medium leading-relaxed">
          Something went wrong while fetching the quiz data.
          <br />
          <span className="text-cyan-400 font-semibold">
            Please try again later.
          </span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default Error;

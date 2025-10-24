import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-70 blur-3xl" />
      <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/10 transition-all duration-500 max-w-[40rem] w-full p-12 text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-gray-100 text-2xl md:text-4xl font-bold mb-8">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

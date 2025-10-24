import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-950 to-transparent opacity-50" />
      <div className="relative z-10 pb-1 pt-10">
        <div className="group relative w-fit mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
          <img
            onClick={() => navigate("/")}
            role="button"
            className="h-36 mx-auto cursor-pointer relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] filter group-hover:brightness-110"
            src="logo.webp"
            alt="KnowIt Logo"
          />
          <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-full scale-100 group-hover:scale-125 transition-all duration-500" />
          <div className="absolute inset-0 border-2 border-pink-500/0 group-hover:border-pink-500/20 rounded-full scale-100 group-hover:scale-150 transition-all duration-700" />
        </div>
        <p className="text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-semibold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          TRIVIA CHALLENGE
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </header>
  );
}

export default Header;

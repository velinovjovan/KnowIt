import HeroButtons from "../components/HeroButtons";
import HeroText from "../components/HeroText";

function Homepage() {
  window.scrollTo(0, 0);
  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 px-5 py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="relative z-10">
        <HeroText />
        <HeroButtons />
      </div>
    </div>
  );
}

export default Homepage;

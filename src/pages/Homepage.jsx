import HeroButtons from "../components/HeroButtons";
import HeroText from "../components/HeroText";

function Homepage() {
  return (
    <div className="flex-col flex w-full bg-gradient-to-b from-slate-800 to-sky-900 px-5 py-24">
      <HeroText />
      <HeroButtons />
    </div>
  );
}

export default Homepage;

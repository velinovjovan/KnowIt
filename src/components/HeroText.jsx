import { TypeAnimation } from "react-type-animation";

function HeroText() {
  return (
    <>
      <div className="w-fit mx-auto px-10">
        <TypeAnimation
          sequence={[
            "Got brains? Let's see if you really know it!",
            350,
            "Got brains? Let's see if you really KnowIt!",
          ]}
          wrapper="h1"
          speed={55}
          className="text-5xl md:text-6xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 font-bold mb-4 drop-shadow-2xl"
        />
      </div>

      <div className="h-1 w-80 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-10 mt-10"></div>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center mt-10 text-gray-200 px-5 leading-relaxed font-light">
        Choose one of the three gamemodes and explore trivia questions. Compete,
        learn something new and most importantly have fun!
      </p>
    </>
  );
}

export default HeroText;

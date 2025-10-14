import { TypeAnimation } from "react-type-animation";

function HeroText() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Got brains? Let’s see if you really know it!",
          350,
          "Got brains? Let’s see if you really KnowIt!",
        ]}
        wrapper="span"
        speed={55}
        className="text-4xl font-mono mx-auto text-white font-bold "
      />
      <p className="text-2xl max-w-[50rem] mx-auto text-center mt-10 text-gray-200 px-5">
        Choose one of the three gamemodes and explore trivia questions. Compete,
        learn something new and most importantly have fun!
      </p>
    </>
  );
}

export default HeroText;

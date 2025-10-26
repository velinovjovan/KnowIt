import { useReducer } from "react";
import Box from "./Box";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

const initialState = {
  randomCategory: "any",
  quickfireCategory: "any",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "quickfire":
      return { ...state, quickfireCategory: action.payload };
    case "random":
      return { ...state, randomCategory: action.payload };
  }
};

function HeroButtons() {
  const navigate = useNavigate();
  const [{ randomCategory, quickfireCategory }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleOnClick = (gm, cat) => {
    navigate(`/quiz?gm=${gm}&cat=${cat}`);
  };

  return (
    <div className="flex gap-14 justify-center items-stretch lg:mt-32 mt-20 lg:mb-28 flex-wrap max-w-[120rem] mx-auto">
      <Box
        title="🎮 Classic Mode 🎮"
        text="Jump into Classic Mode and choose your favorite category! You'll get 20 carefully selected questions with no time limit — take it easy and enjoy the challenge at your own pace."
      >
        <div className="flex flex-col gap-4">
          <Select dispatch={dispatch} currState={randomCategory} gameMode={1} />
          <button
            onClick={() => handleOnClick(1, randomCategory)}
            className="w-full text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:via-cyan-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/60"
          >
            Start Classic Mode
          </button>
        </div>
      </Box>
      <Box
        title="♾️ Infinite Mode ♾️"
        text="For those who can't get enough. Infinite Mode never ends! Keep answering, keep climbing, and see how long your streak lasts. One wrong move and it's game over... but the fun doesn't stop!"
      >
        <div className="pt-[52px]">
          <button
            onClick={() => handleOnClick(3, "any")}
            className="mt-4 w-full text-white bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 hover:from-pink-400 hover:via-purple-500 hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-purple-500/50 font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
          >
            Start Infinite Mode
          </button>
        </div>
      </Box>
      <Box
        title="⚡ Quick Fire ⚡"
        text="Think fast, genius! In Quick Fire, you pick the category but there is a catch! 20 rounds, one ticking timer, and zero room for hesitation. Can you stay cool under pressure?"
      >
        <div className="flex flex-col gap-4">
          <Select
            dispatch={dispatch}
            currState={quickfireCategory}
            gameMode={2}
          />
          <button
            onClick={() => handleOnClick(2, quickfireCategory)}
            className="w-full text-white bg-gradient-to-r from-orange-500 via-pink-600 to-pink-700 hover:from-orange-400 hover:via-pink-500 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/60"
          >
            Start Quick Fire
          </button>
        </div>
      </Box>
    </div>
  );
}

export default HeroButtons;

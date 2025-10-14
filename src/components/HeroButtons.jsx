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
    <div className="flex gap-10 justify-around lg:mt-40 mt-16 lg:mb-28 flex-wrap">
      <Box
        title={"🎮 Classic Mode 🎮"}
        text={
          "Jump into Classic Mode and choose your favorite category! You’ll get 20 carefully selected questions with no time limit — take it easy and enjoy the challenge at your own pace."
        }
      >
        <div className="flex flex-row flex-wrap gap-2 lg:justify-between justify-center lg:gap-0 gap-5">
          <Select dispatch={dispatch} currState={randomCategory} gameMode={1} />
          <button
            onClick={() => handleOnClick(1, randomCategory)}
            className="self-center w-fit text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Classic Mode
          </button>
        </div>
      </Box>
      <Box
        title={"⚡ Quick Fire ⚡"}
        text={
          "Think fast, genius! In Quick Fire, you pick the category but there is a catch! 20 rounds, one ticking timer, and zero room for hesitation. Can you stay cool under pressure?"
        }
      >
        <div className="flex flex-row flex-wrap gap-2 lg:justify-between justify-center lg:gap-0 gap-5">
          <Select
            dispatch={dispatch}
            currState={quickfireCategory}
            gameMode={2}
          />
          <button
            onClick={() => handleOnClick(2, quickfireCategory)}
            className="self-center w-fit text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Quick Fire
          </button>
        </div>
      </Box>
      <Box
        title={"♾️ Infinite Mode ♾️"}
        text={
          "For those who can’t get enough. Infinite Mode never ends! Keep answering, keep climbing, and see how long your streak lasts. One wrong move and it’s game over... but the fun doesn’t stop!"
        }
      >
        <button
          onClick={() => handleOnClick(3, "any")}
          className="self-center w-fit text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Start Infinite Mode
        </button>
      </Box>
    </div>
  );
}

export default HeroButtons;

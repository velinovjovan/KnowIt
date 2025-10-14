import { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Error from "../components/Error";
import QuestionsLoading from "../components/QuestionsLoading";
import QuizComponent from "../components/QuizComponent";
import FinishedScreen from "../components/FinishedScreen";
import QuizTimer from "../components/QuizTimer";

const initialState = {
  constrains: true,
  isLoading: true,
  error: false,
  data: [],
  question: 0,
  score: 0,
  finished: false,
  retake: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "error":
      return { ...state, error: action.payload };
    case "isLoading":
      return { ...state, isLoading: action.payload };
    case "constrains":
      return { ...state, constrains: action.payload };
    case "data":
      return { ...state, data: action.payload };
    case "question":
      return { ...state, question: state.question + 1 };
    case "score":
      return { ...state, score: state.score + 1 };
    case "finished":
      return { ...state, finished: true };
    case "prolong":
      return {
        ...state,
        constrains: false,
        isLoading: true,
        error: false,
        data: [],
        question: 0,
        finished: false,
        retake: state.retake + 1,
      };
    case "reset":
      return {
        constrains: false,
        isLoading: true,
        error: false,
        data: [],
        question: 0,
        score: 0,
        finished: false,
        retake: state.retake + 1,
      };
  }
};

function Quiz() {
  const [
    { constrains, isLoading, error, data, question, score, finished, retake },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const gm = searchParams.get("gm");
  const cat = searchParams.get("cat");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      Number(gm) > 3 ||
      Number(gm) < 1 ||
      Number(cat) > 32 ||
      Number(cat) < 9
    ) {
      navigate("/notfound");
    } else if (isNaN(cat) === false && Number(gm) === 3) {
      navigate("/notfound");
    } else {
      dispatch({ type: "constrains", payload: false });
    }
  }, [cat, gm, navigate]);

  useEffect(() => {
    if (constrains) return;
    const getData = async () => {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=20&type=multiple${
          isNaN(cat) === true ? ` ` : `&category=${cat}`
        }`
      );
      const data = await res.json();
      const { response_code, results } = data;
      if (response_code !== 0) {
        dispatch({ type: "error", payload: true });
      } else {
        dispatch({ type: "data", payload: results });
      }
      dispatch({ type: "isLoading", payload: false });
    };
    dispatch({ type: "isLoading", payload: true });
    dispatch({ type: "error", payload: false });
    getData();
  }, [constrains, cat, retake]);

  if (error) return <Error />;

  if (isLoading) return <QuestionsLoading />;

  if (finished) return <FinishedScreen dispatch={dispatch} score={score} />;

  return (
    <div className="min-h-screen flex-col flex w-full bg-gradient-to-b from-slate-800 to-sky-900 px-5 py-24">
      {Number(gm) === 2 ? <QuizTimer dispatch={dispatch} /> : null}
      <QuizComponent
        key={question}
        question={question}
        data={data}
        gm={gm}
        dispatch={dispatch}
        score={score}
      />
    </div>
  );
}

export default Quiz;

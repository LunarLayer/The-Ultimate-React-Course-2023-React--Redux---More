const { createContext, useContext, useReducer } = require("react");

const QuizContext = createContext();

const initialState = {
  temp: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "nextQuestion":
      return null;

    default:
      throw new Error("QuizProvider reducer has encountered an error");
  }
}

function QuizProvider({ children }) {
  const [{}, dispatch] = useReducer(reducer, initialState);
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Context was used outside the QuizProvider");
  return context;
}

export { QuizProvider, useQuizContext };

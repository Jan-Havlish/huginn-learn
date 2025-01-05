import { createSignal, For } from 'solid-js';

const QuizDisplay = (props) => {
  const [currentQuestion, setCurrentQuestion] = createSignal(0);
  const [selectedAnswers, setSelectedAnswers] = createSignal([]);
  const [showResults, setShowResults] = createSignal(false);

  console.log(props, "props in QuizDisplay");

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...selectedAnswers()];
    newAnswers[currentQuestion()] = props.quiz.questions[currentQuestion()].options?.[optionIndex].correct ?? false;
    setSelectedAnswers(newAnswers);

    if (currentQuestion() < props.quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers().filter(answer => answer).length;
    return Math.round((correctAnswers / props.quiz.questions.length) * 100);
  };

  return (
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {!props.quiz || !props.quiz.questions ? (
        <p class="text-center text-gray-500">No quiz data available</p>
      ) : !showResults() ? (
        <div>
          <h2 class="text-xl font-bold mb-4">
            Question {currentQuestion() + 1} of {props.quiz.questions.length}
          </h2>
          <p class="mb-6">{props.quiz.questions[currentQuestion()].text}</p>
          <div class="space-y-3">
            <For each={props.quiz.questions[currentQuestion()].options}>
              {(option, index) => (
                <button
                  class="w-full p-3 text-left rounded-md border border-gray-300 hover:bg-gray-50"
                  onClick={() => handleAnswer(index())}
                >
                  {option.text}
                </button>
              )}
            </For>
          </div>
        </div>
      ) : (
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p class="text-xl">Your score: {calculateScore()}%</p>
          <button
            class="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
  
};

export default QuizDisplay;
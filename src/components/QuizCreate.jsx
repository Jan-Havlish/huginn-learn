import { createStore } from "solid-js/store";
import { For, createEffect } from "solid-js";


const QuizOptionCreate = ({ option, index, updateOption, removeOption }) => {
  return (
    <div class="flex items-center mt-2">
      <input
        type="checkbox"
        checked={option.correct}
        onChange={(e) => updateOption(index, { ...option, correct: e.target.checked })}
        class="mr-2"
      />
      <input
        type="text"
        value={option.text}
        onChange={(e) => updateOption(index, { ...option, text: e.target.value })}
        class="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={() => removeOption(index)}
        class="ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Odstranit
      </button>
    </div>
  );
};

const QuizQuestionCreate = ({ question, index, updateQuestion, removeQuestion }) => {
  const addOption = () => {
    const newOptions = [...(question.options || []), { text: "", correct: false }];
    updateQuestion(index, { ...question, options: newOptions });
  };

  const updateOption = (optionIndex, newOption) => {
    const newOptions = [...question.options];
    newOptions[optionIndex] = newOption;
    updateQuestion(index, { ...question, options: newOptions });
  };

  const removeOption = (optionIndex) => {
    const newOptions = question.options.filter((_, i) => i !== optionIndex);
    updateQuestion(index, { ...question, options: newOptions });
  };

  return (
    <div class="p-4 bg-gray-100 rounded-md mt-4">
      <textarea
        value={question.text || ""}
        onChange={(e) => updateQuestion(index, { ...question, text: e.target.value })}
        placeholder="Text otázky / bez možností jen předáte text." 
        class="mt-2 w-full p-2 border border-gray-300 rounded-md"
      /> {/* Question text / if no options, just text */}
      <For each={question.options || []}>
        {(option, optionIndex) => (
          <QuizOptionCreate
            option={option}
            index={optionIndex()}
            updateOption={updateOption}
            removeOption={removeOption}
          />
        )}
      </For>
      <div class="flex justify-between mt-2">
        <button
          onClick={addOption}
          class="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Přidat možnost {/* Add option */}
        </button>
        <button
          onClick={() => removeQuestion(index)}
          class="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Odstranit otázku {/* Remove question */}
        </button>
      </div>
    </div>
  );
};

const QuizCreate = ({ onSave }) => {
  const [quiz, setQuiz] = createStore({
    questions: [{ text: "", options: [] }]
  });

  const addQuestion = () => {
    setQuiz("questions", (questions) => [...questions, { text: "", options: [] }]);
  };

  const updateQuestion = (index, newQuestion) => {
    setQuiz("questions", (questions) => {
      const newQuestions = [...questions];
      newQuestions[index] = newQuestion;
      return newQuestions;
    });
    console.log(quiz, "quiz from update");
  };

  const removeQuestion = (index) => {
    setQuiz("questions", (questions) => questions.filter((_, i) => i !== index));
  };

  createEffect(() => {
    const cleanQuizData = JSON.parse(JSON.stringify(quiz)); // Získání čistého objektu
    onSave(cleanQuizData);
    console.log(cleanQuizData, "clean quiz");
  });
  

  return (
    <div>
      <For each={quiz.questions}>
        {(question, index) => (
          <QuizQuestionCreate
            question={question}
            index={index()}
            updateQuestion={updateQuestion}
            removeQuestion={removeQuestion}
          />
        )}
      </For>
      <div class="flex justify-between mt-4">
        <button
          onClick={addQuestion}
          class="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Přidat otázku {/* Add question */}
        </button>
      </div>
    </div>
  );
};

export { QuizCreate, QuizQuestionCreate, QuizOptionCreate };
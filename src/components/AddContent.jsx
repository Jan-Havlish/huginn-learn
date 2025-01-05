import { createStore } from "solid-js/store";
import { For } from "solid-js";
import supabase from "../supabase/client";
import SetStudyCard from "./SetStudyCard";
import {QuizCreate} from "./QuizCreate";

import useUser from "../context/useUser";

const AddContent = () => {
  const options = ["text", "study_card", "quiz"];

  const user = useUser();
  const defaultCardHeight = 200;
  const scrollDown = () => {
      window.scrollBy(0, defaultCardHeight);
  }

  const [formState, setFormState] = createStore({
    title: "",
    description: "",
    content_type: options[0],
    study_cards: [],
    quiz_data: {}
  });

  const handleAddCard = (newCard, index) => {
    setFormState("study_cards", (cards) => {
        const updatedCards = [...cards];
        updatedCards[index] = {
            ...newCard,
            front: newCard.front.trim(),
            back: newCard.back.trim(),
        };
        return updatedCards;
    });
};


const addNewCard = () => {
  setFormState("study_cards", (cards) => [
      ...cards,
      { front: "", back: "" }
  ]);
  scrollDown();
};

  const handleRemoveCard = (index) => {
    setFormState("study_cards", (cards) => {
      const newCards = [...cards];
      newCards.splice(index, 1);
      return newCards;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, content_type, study_cards, quiz_data } = formState;

    const payload = {
        title,
        description,
        type : content_type,
        content : content_type === "quiz" ? JSON.stringify(quiz_data) : JSON.stringify(study_cards),
        author_id : user().id,
        author_name : user().user_metadata.username,
    };

    console.log("Payload:", payload);

    const { error } = await supabase.from("posts").insert(payload);
    if (error) {
        console.error(error);
    }
};

  const handleQuizUpdate = (quizData) => {
    console.log("Received quiz data:", quizData);
    setFormState("quiz_data", quizData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 border-b-2 border-gray-200">
      <button onClick={() => { console.log(formState.quiz_data) }}>Log</button>
      {formState.study_cards.map((card, index) => (
        <p key={index}>{JSON.stringify(card)}</p>
      ))}
      Přidat obsah {/* En: Add content */}
      <input
        type="text"
        placeholder="Zadejte název"
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        onChange={(e) => setFormState("title", e.target.value)}
      />
      <select
        className="w-full p-3 mb-4 border rounded-lg bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        onChange={(e) => setFormState("content_type", e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <textarea
          placeholder={formState.content_type === "text" ? "Zadejte post" : "Zadejte popis"}
          className="w-full p-3 mb-4 border rounded-lg h-32 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          onChange={(e) => setFormState("description", e.target.value)}
        />

      {formState.content_type === "study_card" && (
  <div className="space-y-4">
    
    {formState.study_cards.length > 0 && (
      <For each={formState.study_cards}>
        {(card, index) => (
          <SetStudyCard 
            initialData={card}
            onSave={(newData) => handleAddCard(newData, index())} 
            defaultHeight={defaultCardHeight}
            onRemove={() => handleRemoveCard(index())}
          />
        )}
      </For>
    )}
    <button
      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
      onClick={addNewCard}
    >
      Přidat studijní kartu {/* En: Add study card */}
    </button>
  </div>
)}

{formState.content_type === "quiz" && (
  <QuizCreate onSave={handleQuizUpdate} />
)}
      <button
        className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mt-6 font-medium"
        onClick={handleSubmit}
      >
        Odeslat {/* En: Submit */}
      </button>
    </div>
  );
};

export default AddContent;
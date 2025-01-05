import QuizDisplay from "./QuizDisplay";
import StudyCardList from "./StudyCardsList";
import { createSignal } from "solid-js";

const PostCard = (props) => {
  const type = props.post.type;
  const content = JSON.parse(props.post.content);

  const [isExpended, setIsExpended] = createSignal(false);

  const handleButtonClick = () => {
    setIsExpended(!isExpended());
    console.log(isExpended(), "isExpended");
  };

  console.log(props.post.content, "props.post.content in PostCard");
  return (
    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 class="text-2xl font-bold mb-2">{props.post.title}</h2>
      <p class="text-gray-600 mb-4">{props.post.description}</p>
      {isExpended() && (
        <>
          {type === "quiz" && content && <QuizDisplay quiz={content} />}
          {type === "study_card" && content && <StudyCardList cards={content} />}
        </>
      )}
      {(Array.isArray(content) && content.length > 0) ||
        (typeof content === "object" && content !== null && Object.keys(content).length > 0) ? (
        <button
          class="text-yellow-500 hover:underline"
          onClick={handleButtonClick}
        >
          {isExpended() ? "Méně" : "Více"}
        </button>
      ) : null}

      <div class="flex justify-between text-sm text-gray-500">
        <span>Od {props.post.author_name}</span>
        <span>{props.post.created_at}</span>
      </div>
    </div>
  );
};

export default PostCard;

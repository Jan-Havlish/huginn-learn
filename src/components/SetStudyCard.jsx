// SetStudyCard.jsx
import { createSignal, onMount } from "solid-js";

const SetStudyCard = ({ onSave, initialData, defaultHeight, onRemove }) => {
  const [front, setFront] = createSignal(initialData?.front || "");
  const [back, setBack] = createSignal(initialData?.back || "");

  const h = defaultHeight || 200;
  
  const handleChange = (type, value) => {
    if (type === "front") setFront(value);
    if (type === "back") setBack(value);
    onSave({ front: type === "front" ? value : front(), back: type === "back" ? value : back() });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg h-[${h}px]">
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-lg"
        onClick={onRemove}
      >
        x
      </button>
      <textarea
        value={front()}
        placeholder="Přední strana karty"
        className="w-full p-3 border rounded-lg"
        onChange={(e) => handleChange("front", e.target.value)}
      /> {/*Front side of the card*/}
      <textarea
        value={back()}
        placeholder="Zadní strana karty"
        className="w-full p-3 border rounded-lg"
        onChange={(e) => handleChange("back", e.target.value)}
      /> {/*Back side of the card*/}
    </div>
  );
};

export default SetStudyCard;
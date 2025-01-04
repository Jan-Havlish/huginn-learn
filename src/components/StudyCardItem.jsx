import { createSignal } from 'solid-js';

const StudyCardItem = (props) => {
  const [isFlipped, setIsFlipped] = createSignal(false);

  const toggleCard = () => {setIsFlipped(!isFlipped())
    console.log(isFlipped(), "isFlipped");
  };

  return (

    <div class="relative h-64 cursor-pointer [perspective:1000px]" onClick={toggleCard}>
  <div class={`absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped() ? '[transform:rotateY(180deg)]' : ''}`}>
    <div class="absolute w-full h-full bg-white rounded-lg shadow-md p-6 [backface-visibility:hidden]">
      {/* Front content */}

      {/* Front side */}
      <div class="absolute w-full h-full bg-white rounded-lg shadow-md p-6 backface-hidden">
          <div class="flex flex-col items-center justify-center h-full">
            <h3 class="text-xl font-bold text-center">{props.card.front}</h3>
            {props.card.category && (
              <span class="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {props.card.category}
              </span>
            )}
          </div>
        </div>
    </div>
    <div class="absolute w-full h-full bg-white rounded-lg shadow-md p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      {/* Back content */}
      {/* Back side */}
      <div class="absolute w-full h-full bg-white rounded-lg shadow-md p-6 backface-hidden">
          <div class="flex items-center justify-center h-full">
            <p class="text-center text-gray-700">{props.card.back}</p>
          </div>
        </div>
    </div>
  </div>

    </div>
  );
}

export default StudyCardItem
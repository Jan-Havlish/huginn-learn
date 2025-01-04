import StudyCardItem from "./StudyCardItem"
import { For } from "solid-js";

const StudyCardList = (props) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <For each={props.studyCards}>
        {(card) => <StudyCardItem card={card} />}
      </For>
    </div>
  );
};

export default StudyCardList
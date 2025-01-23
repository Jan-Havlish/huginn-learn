import { For } from "solid-js";


export default function RoadMapBoard() {

  const roadMap = [ // ToDo - translate
      {text: "Komentáře a Liky", group: "userInteractions"}, 
      {text: "Základní nsfw filter", group: "safety"},
      {text: "Vlastní url pro jednotlivé přízpěvky", group: "userInteractions"},
      {text: "Stránky pro uživatele", group: "userInteractions"},
      {text: "Nahlašování, moderace, banování", group: "safety"},
      {text: "Citace", group: "safety"},
      {text: "Jednoduchý přístup k svému obsahu", group: "contentManagement"},
      {text: "Úprava obsahu", group: "contentManagement"},
      {text: "Možnost mít rozpracovaný, nepublikovaný obsah", group: "contentManagement"},
      {text: "Sledovat uživatele a být sledován", group: "userInteractions"},
      {text: "Blokování uživatelů", group: "safety"},
      {text: "Možnost výtvořit obsah na základě cizích, či vlastních přízpěvků", group: "contentManagement"},
      {text: "Editor kvízů, karet s přístupem na relevantí (zvolené) přízpěvky", group: "contentManagement"},
      {text: "Generování kvízů, karet ze zvolených přízpěvků", group: "llms"},
      {text: "Chatbot s otázkami o zvoleném obsahu", group: "llms"},
      {text: "Rozdělování přístupu k AI a bonusový přístup za obsah", group: "llms"},
      {text: "Možnost blokovat cizí AI obsah", group: "llms"},
      {text: "Podmínky používání", group: "legal"},
      {text: "Zpuštění pro veřejnost", group: "legal"},
  ]

  const colors = {
    userInteractions: "bg-blue-500",
    safety: "bg-red-500",
    contentManagement: "bg-green-500",
    llms: "bg-yellow-500",
    legal: "bg-gray-500",
  }


  return (
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 bg-gray-100 rounded-lg">
  <For each={roadMap}>
    {(item) => (
      <div
        class={`p-4 rounded-lg border-2 shadow-lg ${colors[item.group]} max-w-xs`}
        style={{
          transform: `rotate(${Math.random() * 10 - 5}deg) translateX(${Math.random() * 50 - 5}px) translateY(${Math.random() * 30 - 5}px)`,
          borderColor: "rgba(0, 0, 0, 0.2)",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
          
        }}
      >
        {item.text}
      </div>
    )}
  </For>
</div>

  );
}

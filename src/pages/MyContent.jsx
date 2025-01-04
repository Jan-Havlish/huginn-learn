import { createSignal } from "solid-js";
import AddContent from "../components/AddContent.jsx";
import useUser from "../context/useUser";
import { A } from "@solidjs/router";

const MyContent = () => {
  const user = useUser();

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen">
      {<button onClick={() => console.log(user())} class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">log user</button>}
      {user() ? <div>
        <AddContent />
        <h1>Můj obsah {/*My content*/}</h1>
      </div> : <A href="/login" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Přihlaste se {/*Login*/}
      </A>}
    </div>
  );
};

export default MyContent;

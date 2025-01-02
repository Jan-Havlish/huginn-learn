import { createSignal, onCleanup } from "solid-js";
import { UserContext } from "./userCreate";
import supabase from "../supabase/client";

const UserProvider = (props) => {
  const [user, setUser] = createSignal(supabase.auth.user);

  const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
    setUser(session?.user ?? null);
  });

  onCleanup(unsubscribe);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;


import { useContext } from "solid-js";
import { UserContext } from "./userCreate";

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export default useUser;

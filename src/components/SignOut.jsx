import supabase from "../supabase/client";

const SignOut = () => {
  const handleSignOut = async () => {
    console.log("Signout attempt");

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  return <buton onClick={handleSignOut} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Odhlásit se {/*Sign out*/}</buton>;
};

export default SignOut;

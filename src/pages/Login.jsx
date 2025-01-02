import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import supabase from "../supabase/client";

const Login = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login attempt with:", {
      email: email(),
      password: password(),
    });

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email(),
        password: password(),
      });
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Přihlášení do účtu {/*Login to your account*/}
          </h2>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <input
                type="password"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Heslo"
              /> {/*Password*/}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Přihlásit se {/*Login*/}
            </button>
          </div>
          <p>
            Nemáte účet?{/*Don't have an account?*/}{" "}
            <A href="/register" className="font-bold text-yellow-500">
              Vytvořit účet {/*Create an account*/}
            </A>{" "}
            Nebo jste zapomněli heslo?{/*Forgot your password?*/}{" "}
            <A
              href="/"
              className="font-bold text-yellow-500"
              onClick={() => {
                alert("Pardon, ještě neimplementováno. Kontaktujte mě e-mailem. / Sorry, not implemented yet. Contact me via e-mail.");
              }}
            >
              Obnovit heslo {/*Reset password*/}
            </A>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

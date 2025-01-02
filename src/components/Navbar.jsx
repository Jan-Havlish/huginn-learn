import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import useUser from "../context/useUser";
import SignOut from "./SignOut";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const user = useUser();
  console.log("User:", user());
  const handleNavClick = (route) => {
    console.log("Navigating to:", route);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
    console.log("Menu toggled:", !isMenuOpen());
  };

  const activeClass = "text-yellow-500 border-b-2 border-yellow-500";
  const inactiveClass = "text-gray-700 hover:text-yellow-500";

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <A href="/" className="text-2xl font-bold text-yellow-500">
                HuginnLearn
              </A>
            </div>
            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <A
                href="/discover"
                onClick={() => handleNavClick("discover")}
                activeClass={activeClass}
                inactiveClass={inactiveClass}
                className="px-3 py-2 rounded-md"
              >
                Objevit {/*Discover*/}
              </A>
              <A
                href="/my-content"
                onClick={() => handleNavClick("my-content")}
                activeClass={activeClass}
                inactiveClass={inactiveClass}
                className="px-3 py-2 rounded-md"
              >
                Můj obsah {/*My content*/}
              </A>
            </div>
          </div>

          {/* Login button and hamburger menu */}
          <div className="flex items-center">
            {user() ? (
              <SignOut />
            ) :
            <A
              href="/login"
              onClick={() => handleNavClick("login")}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Přihlásit se {/*Login*/}
            </A>
            }

            {/* Hamburger button */}
            <button
              onClick={toggleMenu}
              className="sm:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Otevřít hlavní menu {/*Open main menu*/}</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen()
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen() ? "block" : "hidden"} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <A
              href="/discover"
              onClick={() => handleNavClick("discover")}
              activeClass="bg-yellow-500 text-white"
              inactiveClass="text-gray-700 hover:bg-yellow-100 hover:text-yellow-500"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Objevit {/*Discover*/}
            </A>
            <A
              href="/my-content"
              onClick={() => handleNavClick("my-content")}
              activeClass="bg-yellow-500 text-white"
              inactiveClass="text-gray-700 hover:bg-yellow-100 hover:text-yellow-500"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Můj obsah {/*My content*/}
            </A>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

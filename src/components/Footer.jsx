const Footer = () => {
  const handleFooterClick = (section) => {
    console.log("Footer section clicked:", section);
  };

  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">O projektu {/*About the project*/}</h3>
            <p className="mt-4 text-gray-600">
              HuginnLearn je platforma pro sdílení vzdělávacích materiálů s
              podporou AI. {/*HuginnLearn is a platform for sharing educational materials with AI support.*/}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Odkazy {/*Links*/}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  onClick={() => handleFooterClick("about")}
                  href="/about"
                  className="text-gray-600 hover:text-yellow-500"
                >
                  O nás {/*About us*/}
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleFooterClick("privacy")}
                  href="/privacy"
                  className="text-gray-600 hover:text-yellow-500"
                >
                  Ochrana soukromí {/*Privacy policy*/}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Kontakt {/*Contact*/}</h3>
            <p className="mt-4 text-gray-600">Email: ToDo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

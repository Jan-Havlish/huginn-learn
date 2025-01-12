import RoadMapBoard from "../components/RoadMapBoard";

function Home() {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Vzdělávání pro {/*Education for*/}</span>
          <span className="block text-yellow-500">budoucnost {/*Future*/}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Sdílejte znalosti, vytvářejte kvízy a učte se s pomocí AI. {/*Share knowledge, create quizzes, and learn with AI.*/}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              onClick={handleGetStarted}
              href="/register"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
            >
              Začít zdarma {/*Get started for free*/}
            </a>
          </div>
        </div>
        <h3 className="mt-3 max-w-md mx-auto text-base text-red-500 sm:text-3xl md:mt-5 md:text-5xl md:max-w-3xl m-4">
          Platforma zatím není provozu schopná. {/*Currently not available.*/}
        </h3>
        <p>
          Můžete nám pomoct s vývojem na <a className="text-yellow-500 underline" href="https://github.com/Jan-Havlish/huginn-learn">GitHubu</a> {/*You can help us with development on <a href="https://github.com/Jan-Havlish/huginn-learn">GitHub</a>.*/}
        </p>
        <h3 className="mt-3 max-w-md mx-auto text-base text-red-500 sm:text-2xl md:mt-5 md:text-4xl md:max-w-3xl m-4">Plány funkcí {/*Future features*/}</h3>
        <RoadMapBoard />
      </div>
    </div>
  );
}

export default Home;

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          O projektu HuginnLearn {/*About the HuginnLearn project*/}
        </h1>

        <section className="prose lg:prose-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Naše vize {/*Our vision*/}
          </h2>
          <p className="text-gray-600 mb-6">
            HuginnLearn vznikl s myšlenkou vytvořit moderní vzdělávací
            platformu, která kombinuje sílu komunity a umělé inteligence. Naším
            cílem je zpřístupnit kvalitní vzdělávání všem a vytvořit prostor,
            kde se studenti mohou učit efektivněji a zábavněji.
            {/*Our goal is to provide education to everyone and create a space where students can learn effectively and funnier. To combine the power of community and AI.*/}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Co nabízíme {/*What we offer*/}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-yellow-500 mb-2">
                Sdílení znalostí {/*Sharing knowledge*/}
              </h3>
              <p className="text-gray-600">
                Platforma pro sdílení studijních materiálů a poznámek mezi
                studenty. 
                {/*Platform for sharing study materials and notes between students.*/}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-yellow-500 mb-2">
                AI Asistent {/*AI Assistant*/}
              </h3>
              <p className="text-gray-600">
                Inteligentní pomocník pro generování kvízů a testování znalostí.
                {/*AI assistant for generating quizzes and testing knowledge.*/}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-yellow-500 mb-2">
                Komunita {/*Community*/} {/*Hopefully*/}
              </h3>
              <p className="text-gray-600">
                Aktivní komunita studentů a vzdělavatelů. {/*Active community of students and educators.*/} {/*Hopefully*/}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-yellow-500 mb-2">
                Personalizace obsahu {/*Personalization of content*/}
              </h3>
              <p className="text-gray-600">
                Přizpůsobení obsahu vašim vzdělávacím potřebám. {/*Customization of content based on your educational needs.*/}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Kontaktujte nás {/*Contact us*/}
          </h2>
          <p className="text-gray-600 mb-4">
            Máte dotaz nebo nápad na vylepšení? Neváhejte nás kontaktovat: {/*Have a question or suggestion? Don't hesitate to contact us:*/}
          </p>
          <ul className="list-none space-y-2 text-gray-600">
            <li>Email: ToDo</li>
            <li>Twitter: ToDo</li>
            <li>GitHub: ToDo</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

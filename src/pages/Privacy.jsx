const Privacy = () => {
  const handleDownloadPDF = () => {
    console.log("Attempting to download privacy policy PDF");
    // ToDo
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Ochrana soukromí {/*Privacy Policy*/}
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-6">
            Naše zásady ochrany soukromí jsou k dispozici v PDF dokumentu níže.
            Dokument obsahuje detailní informace o tom, jak zpracováváme vaše
            osobní údaje, jaká máte práva a jak je můžete uplatnit.
            {/*Privacy policy PDF document includes detailed information about how we collect your personal information, what rights you have, and how you can pay for it.*/}
          </p>

          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-yellow-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Zásady ochrany soukromí {/*Privacy policies*/}
              </h3>
              <p className="text-sm text-gray-500 mb-4">PDF dokument, 500 KB</p>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Stáhnout PDF {/*Download PDF*/}
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Poznámka {/*Note*/}</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Poslední aktualizace zásad ochrany soukromí: 29. prosince
                    2024. Pro jakékoliv dotazy ohledně zpracování osobních údajů
                    nás kontaktujte na ToDo 
                    {/*Last update of privacy policies: 29. November 2024. For any questions about data processing, contact us at ToDo.*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;

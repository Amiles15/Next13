{/* Modal View User List */}
<div>
{/* Modal toggle */}
<div className="px-4 flex items-end justify-end">
  <button
    className="text-white mt-44 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    View Data
  </button>
</div>

{/* Main modal */}
  <div
    id="defaultModal"
    tabIndex={1}
    aria-hidden="true"
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-black bg-opacity-70"
  >
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>

          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              style={{ cursor: "pointer" }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.59 16.34L16.34 17.59L12 13.25L7.66 17.59L6.41 16.34L10.75 12L6.41 7.66L7.66 6.41L12 10.75L16.34 6.41L17.59 7.66L13.25 12L17.59 16.34Z" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union
            enacts new consumer privacy laws for its citizens, companies
            around the world are updating their terms of service
            agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation
            (G.D.P.R.) goes into effect on May 25 and is meant to ensure
            a common set of data rights in the European Union. It
            requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect
            them.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
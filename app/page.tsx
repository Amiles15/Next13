'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [dropdown,setDropdown] = useState(false);

  const handlehover = () => {
      setDropdown(!dropdown)
  }

  return (
    <main className="mb-5 px-4">
      {/* Navbar FLowbite */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src="/src/matcha.jpg" className="h-8 mr-3" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Matcha
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={"/"}>
                  <label
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </label>
                </Link>
              </li>
              <li>
                <Link href={"/page"}>
                  <label
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Page
                  </label>
                </Link>
              </li>
              <li>  
              <button onClick={handlehover} 
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">User</button>
                {dropdown && (
                  <div className="dropdown-content z-10 divide-y divide-gray-300 rounded-lg shadow w-20 dark:bg-gray-500">
                    {/* Dropdown content goes here */}
                    <p>Profile</p>
                    <p>Logout</p>
                  </div>
                )}
              </li> 
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('/src/matcha.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We, Best Matcha Product
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at istana matcha we using best ingridient and have smoth flavor
            and aroma
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/regis"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Don't Have Account?
            </a>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Footer */}
      <footer className="bg-slate-300 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img
                src="/src/matcha.jpg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Matcha
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 px-2">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <img
                        src="/src/github.svg"
                        width={25}
                        height={25}
                        alt=""
                      />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </li>
                  <li className="mb-4 px-2">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <img
                        src="/src/facebook.svg"
                        width={25}
                        height={25}
                        alt=""
                      />
                      <span className="sr-only">Facebook page</span>
                    </Link>
                  </li>
                  <li className="mb-4 px-2">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <img
                        src="/src/instagram.svg"
                        height={25}
                        width={25}
                        alt=""
                      />
                      <span className="sr-only">Istagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Matcha Green
              </a>
              .
            </span>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </main>
  );
}

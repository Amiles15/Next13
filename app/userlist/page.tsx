"use client";

import React, { useState, useEffect } from "react";

// Submit Form
const page = () => {
  const onSubmit = () => {
    alert("test");
  };

  //show data
  const clikShow = () => {
    setShowMap(true);
    console.log(clikShow);
  };

  //Get Api Data
  const ClickTampilkan = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/berry");
      const data = await response.json();
      setBerries(data.results);
      setShowMap(true);
      setNavVisible(true);
      console.log(data);
    } catch (error) {
      console.error("Error fetching berries:", error);
    }
  };

  //paggination
  const [isNavVisible, setNavVisible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const [data, setBerries] = useState([]);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(data.length / itemPerPage);
  // const numberPage = [...Array(totalPage + 1).keys()].slice(1);
  const numberPage = Array.from(Array(totalPage).keys()).map(i => i + 1);


  const prevPage = () => {
    if (currentPage !== 1) {
      // Mengubah totalPage menjadi 1, karena kita ingin memeriksa apakah currentPage bukan halaman pertama.
      setCurrentPage(currentPage - 1); // Mengurangi currentPage sebanyak 1 jika currentPage bukan halaman pertama.
    } else {
      // Tidak ada yang perlu dilakukan jika currentPage adalah halaman pertama.
      // Anda bisa menambahkan pesan atau log di sini untuk memberi tahu pengguna bahwa ini adalah halaman pertama.
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Form  Regist */}
      <div className="px-4 w-full mb-10">
        <div className="mt-10 flex items-center justify-center">
          <form
            className="border-slate-400 border lg:w-full xl:w-3/5 px-3 py-2 rounded-md"
            onSubmit={onSubmit}
          >
            <div className="relative z-0 mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Form Regist End */}

      {/* Tabel Show */}
      <div className="px-4 justify-center items-center">
        <div className="w-full">
          <div className="flex w-full justify-center items-center">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto shadow-md sm:rounded-lg">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    URL
                  </th>
                  <th>
                    <button
                      onClick={ClickTampilkan}
                      className="px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-lg"
                    >
                      Tampilkan
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {showMap &&
                  currentItems.map(
                    (berry: { name: string; url: String }, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{berry.name}</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {berry.url}
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          <button className="px-4 text-white bg-red-500 hover:bg-red-700 rounded-xl">
                            Delete
                          </button>
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          <button className="px-4 text-white bg-blue-500 hover: rounded-xl">
                            Edit
                          </button>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Tabel Show End */}

      {/* Pagginasi */}
      <div className="px-4 mt-10 flex justify-center items-center">
        {isNavVisible && (
          <nav className="px-4">
            <ul className="paggination flex px-4">
              <li className="page-item px-4">
                <a href="#" className="page-link" onClick={prevPage}>
                  Prev
                </a>
              </li>
              {numberPage.map((pageNumber: any, index) => (
                <li
                  className={`page-link px-4 ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                  key={index}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changePage(pageNumber)}
                  >
                    {pageNumber}
                  </a>
                </li>
              ))}
              <li className="page-item px-4">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {/* Tabel Show End */}
    </>
  );
};

export default page;

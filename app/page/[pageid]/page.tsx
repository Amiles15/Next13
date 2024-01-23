"use client";
import React, { useEffect, useState } from "react";
import { fetchData , getImageUrl } from "../apicall/apicallservice";
import { Menuinterface } from "@/app/Interface/menuinterface";

const page = () => {
  const [matchaMenu, SetmacthaMenu] = useState<Menuinterface[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await fetchData("/listmenu");
        console.log("Fetched data:", data);
        SetmacthaMenu(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <h1>Your Component</h1>

      <div className="w-full flex items-center justify-center px-4 mb-2">
        {matchaMenu.map((menuItem) => (
          <div key={menuItem._id}>
            <div className="grid grid-cols-1 gap-2">
              <div className="px-3 mb-5">
                <div className="px-3 mb-5">
                  <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {menuItem.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {menuItem.description}
                    </p>
                    <figure>
                    <img src={getImageUrl(menuItem.imagesrc)} alt={menuItem.title} style={{ maxWidth: '100px' }} />
                    </figure>
                    <p className='className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white"'>
                      {menuItem.harga}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;



import React from "react";
import SliderComp from "../Component/Slider/slider";

export const metadata = {
  title: "Menu",
  description: "Generated by create next app",
};

const page = () => {
  // map
  const data = [
    {
      imagesrc: "/src/matcha.jpg",
      title: "matcha 1",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
    },

    {
      imagesrc: "/src/matcha.jpg",
      title: "matcha 2",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
    },

    {
      imagesrc: "/src/matcha.jpg",
      title: "matcha 3",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
    },
    {
      imagesrc: "/src/matcha.jpg",
      title: "matcha 4",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
    },
  ];
  //map End

  return (
    <>

      <SliderComp></SliderComp>

      <div className="p-16 px-4 text-center text-2xl">
        <h3>Menu Baru</h3>
      </div>

      {/* Card Start */}
      <div className="w-full flex item-center justify-center px-4 mb-2">
        <div className="grid grid-cols-2">
          {data.map((item, index) => (
            <div className="px-5 mb-5">
              <div
                key={index}
                className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <figure>
                  <img src={item.imagesrc} alt="matcha" height={20} />
                </figure>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {item.buttonText}
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
          ))}
        </div>
      </div>
      {/* Card  End*/}
    </>
  );
};

export default page;

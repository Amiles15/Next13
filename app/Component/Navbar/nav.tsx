import Link from "next/link";
import React, { useState } from "react";

const NavComp = () => {
  let [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleDropdownToggle = (isOpen: boolean) => {
    setDropdown(isOpen);
  };
  return (

    <div className="shadow-md w-full fixed top-0 left-0 bg-slate-600">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src="/src/matcha1.png" height={45} width={45} alt="" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] md:bg-slate-600 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-18 " : "top-[-490px]"
          }`}
        >
          <div className="md:flex bg-slate-600 opacity-80 rounded-md">
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/"}>
                <label
                  className="nav-link hover:text-gray-800 ease-in-out"
                  aria-current="page"
                >
                  Home
                </label>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/page"}>
                <label
                  className="nav-link hover:text-gray-800 ease-in-out"
                  aria-current="page"
                >
                  Page
                </label>
              </Link>
            </li>
            <li className="relative mx-4 my-6 md:my-0">
              <label
                onMouseEnter={() => handleDropdownToggle(true)}
                onMouseLeave={() => handleDropdownToggle(false)}
                className="nav-link"
              >
                User
              </label>
              {dropdown && (
                <div
                  onMouseEnter={() => handleDropdownToggle(true)}
                  onMouseLeave={() => handleDropdownToggle(false)}
                  className="dropdown-content absolute z-20 divide-y divide-gray-300 rounded-lg shadow w-20 dark:bg-gray-500 text-center"
                >
                  <button className="hover:text-gray-800 ease-in-out">
                    Profile
                  </button>
                  <button className="hover:text-gray-800 ease-in-out">
                    Logout
                  </button>
                </div>
              )}
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href={'/login'}>
              <label
                className="nav-link hover:text-gray-800 ease-in-out"
                aria-current="page"
              >
                Login
              </label>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavComp;

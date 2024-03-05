import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const NavComp = ({ loggedInUser }: { loggedInUser: string | null }) => {
  let [open, setOpen] = useState(false);
  const [cookieName, setCookieName] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState(false);
  
  const handleDropdownToggle = (isOpen: boolean) => {
    setDropdown(isOpen);
  };

  useEffect(() => {
    // Fetch the user's name from cookies when the component mounts
    const nameFromCookie = Cookies.get('name');
    setCookieName(nameFromCookie || null);
  }, []);

  const handleLogout = () => {
    // Remove token and name from cookies
    Cookies.remove('token');
    Cookies.remove('name');
    // Set cookieName state to null to hide the user's name in the navigation
    setCookieName(null);
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
          <div className="md:flex bg-slate-600 opacity-80 rounded-md z-[1000]">
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
            {cookieName && (
              <><li className="relative mx-4 my-6 md:my-0">
                <label
                  onMouseEnter={() => handleDropdownToggle(true)}
                  onMouseLeave={() => handleDropdownToggle(false)}
                  className="nav-link"
                >
                  <p> Hi, {cookieName}</p>
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
                    <button onClick={handleLogout} className="hover:text-gray-800 ease-in-out">
                      Logout
                    </button>
                  </div>
                )}
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href={'/cart'}>
                    <svg
                      className="inline-block w-10 h-10 -ml-2 -mt-2"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M97.7,114.7h43.9l22.6,65.7l12,39.8c0,0,0,0.1,0,0.1l14.8,49.1c0,0.1,0.1,0.2,0.1,0.3l9.1,30.1h-3.5   
                               c-18.1,0-32.8,14.7-32.8,32.8s14.7,32.8,32.8,32.8h16.3c-2.8,4.7-4.5,10.2-4.5,16c0,17.1,13.9,31,31,31s31-13.9,31-31
                               c0-5.9-1.6-11.3-4.5-16h59.5c-2.8,4.7-4.5,10.2-4.5,16c0,17.1,13.9,31,31,31s31-13.9,31-31c0-5.9-1.6-11.3-4.5-16h13.5 
                               c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H196.6c-9.8,0-17.8-8-17.8-17.8s8-17.8,17.8-17.8h13.6h39c0,0,0,0,0,0c0,0,0,0,0,0h87   
                               c0,0,0,0,0,0c0,0,0,0,0,0h39c3.3,0,6.2-2.2,7.2-5.3l12-39.8c0-0.1,0-0.1,0-0.2l26.9-89.2c0.7-2.3,0.3-4.7-1.2-6.6s-3.6-3-6-3  
                               h-53.1c0,0,0,0-0.1,0h-68.3c0,0,0,0,0,0s0,0,0,0h-68.3c0,0-0.1,0-0.1,0h-47.7l-22.6-65.8c-1-3-3.9-5.1-7.1-5.1H97.7   
                               c-4.1,0-7.5,3.4-7.5,7.5S93.6,114.7,97.7,114.7z M255.5,381.3c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16    S255.5,372.5,255.5,381.3z M368.1,381.3c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16S368.1,372.5,368.1,381.3z M381.8,259.7  
                               h-28.7l6.6-34.2h32.4L381.8,259.7z M337.8,259.7h-37.5v-34.2h44.2L337.8,259.7z M300.3,299.7v-25h34.6l-4.8,25H300.3z     M255.5,299.7l-4.8-25h34.6v25H255.5z M208.3,274.7h27.1l4.8,25h-24.4L208.3,274.7z M300.3,210.5v-25h51.9l-4.8,25H300.3z    
                               M285.3,210.5h-47.1l-4.8-25h51.9V210.5z M285.3,225.5v34.2h-37.5l-6.6-34.2H285.3z M232.5,259.7h-28.7l-10.3-34.2h32.4    L232.5,259.7z M369.8,299.7h-24.4l4.8-25h27.1L369.8,299.7z M396.7,210.5h-34l4.8-25h36.7L396.7,210.5z M218.1,185.5l4.8,25h-34    l-7.5-25H218.1z"/>
                    </svg>
                </Link>
              </li>
              </>
            )}
            {!cookieName && (
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
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavComp;

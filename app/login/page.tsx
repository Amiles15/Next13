"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import postLogin from "../login/apicall/loginservice";
import { LoginInterface } from "../Interface/logininterface";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Submit Form
const page = () => {
  
  const router = useRouter();
  const [formlogin,setformlogin] = useState<LoginInterface>({
  email:'',
  password:''
})

const handleLogin = async (e: any) => {
  e.preventDefault();

  formlogin.email = e.target[0].value;
  formlogin.password = e.target[1].value;

  // console.log('login', formlogin);

  const response = await postLogin(formlogin);

  if (response) {
    // Login successful
    toast.success('Your Succesful Login');
    // Save the token and name in cookies
    Cookies.set('token', response.token, { expires: response.expiresIn });
    Cookies.set('name', response.name, { expires: response.expiresIn });
    // Redirect to the desired URL
    router.push('/');
  } else {
    // Login failed
    toast.error('Check Your Email And Password');
    // Handle error as needed, no redirect in case of an error
  }
};

  return (
    <>
      <div className="bg-center bg-no-repeat bg-[url('/src/MatchaBg.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="p-48 px-4 my-2 w-full ">
          <div className="">
            <form onSubmit={handleLogin} className="max-w-sm mx-auto border-white rounded-lg border-2 px-5">
              <div className="mb-5 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {/* <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div> */}
              <button
                type="submit"
                className="text-white bg-blue-700 mb-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

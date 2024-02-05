"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { registInterface } from "../Interface/registInterface";
import PostRegist from "./apicall/registservice";
import { toast } from "sonner";

const page = () => {

  const [agama, setagama] = useState("");
  const [jk, setJK] = useState('');
  const [job, setJob] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formregis, setformRegist] = useState<registInterface>({
    email:'',
    password:'',
    nama:'',
    ttl:'',
    alamat:'',
    jenis_kelamin:'',
    agama:'',
    pekerjaan:'',
    hp:''
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleAgama = (e:any) => {
    const { value } = e.target;
    setagama(value)
  };

  const handleJob = (e:any) => {
    const { value } = e.target;
    setJob(value)
  };

  const handleJK = (e:any) => {
    const { value } = e.target;
    setJK(value)
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    formregis.jenis_kelamin = jk;
    formregis.agama = agama;
    formregis.pekerjaan = job;
    formregis.email = e.target[0].value;
    formregis.password = e.target[1].value;
    formregis.nama = e.target[2].value;
    formregis.ttl = e.target[3].value;
    formregis.alamat = e.target[4].value;
    formregis.hp = e.target[8].value;

    // console.log('dataform',formregis)

    const response = await PostRegist(formregis);

  if (response) {
    // console.log('Success:', response);
    toast.success('Data Berhasil Di Kirim')
    // Handle success as needed
  } else {
    // console.error('Failed to post data.');
    toast.error('Error Terjadi Kesalahan')
    // Handle error as needed
  }
  };

  return (
    <>
      {/* Form Akun */}
      <div className="w-full">
        <div className="my-4 px-4 flex items-center justify-center col-span-2 rounded-lg">
          <form onSubmit={handleSubmit} className="bg-slate-400 rounded-lg xl:w-3/5 lg:min-w-max">
            <div className="my-3 px-4 flex items-center gap-28">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Email :
              </p>
              <input
                id="email"
                type="email"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-43 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4 flex items-center gap-20">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Password :
              </p>
              <div className="relative">
                <input
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-43 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
                        fill="#000000"
                      />
                      <path
                        d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
                        fill="#000000"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h48v48H0z" fill="none" />
                      <g id="Shopicon">
                        <path
                          d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
		                        C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"
                        />
                        <path
                          d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
		                        s-4-1.794-4-4C20,21.794,21.794,20,24,20z"
                        />
                      </g>
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="my-3 px-4 flex items-center gap-12">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Lengkap :
              </p>
              <input
                id="name"
                required
                type="tetx"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-43 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4 flex items-center">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Tempat, Tanggal Lahir :
              </p>
              <input
                id="ttl"
                type="tetx"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4 flex items-center gap-24">
              <p className="block pr-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alamat :
              </p>
              <input
                id="alamat"
                type="tetx"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4">
              <div className="font-medium text-base flex items-center gap-11 my-3">
                <p>Jenis Kelamin :</p>
                <select onChange={handleJK} required className="bg-gray-700 h-9 w-40 rounded-lg text-center text-sm font-light">
                  <option className="">Pilih Jenis Kelamin</option>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>
              </div>

              <div className="font-medium text-base flex items-center gap-24 my-3">
                <p>Agama :</p>
                <select onChange={handleAgama} className="bg-gray-700 h-9 w-28 rounded-lg text-center text-sm font-light">
                  <option className="">Pilih Agama</option>
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="hindu">Hindu</option>
                  <option value="budha">Budha</option>
                </select>
              </div>

              <div className="font-medium text-base flex items-center gap-16 my-3">
                <p className="pr-2">Pekerjaan :</p>
                <select onChange={handleJob} className="bg-gray-700 w-36 h-9 rounded-lg text-center text-sm font-light">
                  <option className="">Pilih Pekerjaan</option>
                  <option value="TNI/POLRI">TNI/POLRI</option>
                  <option value="WIRASUASTA">WIRASUASTA</option>
                  <option value="PEGAWAI BUMN">PEGAWAI BUMN</option>
                  <option value="PELAJAR">PELAJAR</option>
                </select>
              </div>
              <div className="my-3 flex items-center gap-24">
                <p className="block pr-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  No Hp :
                </p>
                <input
                  id="hp"
                  type="number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-8 w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
              </div>
              <div className="flex justify-center gap-5 my-5">
                <button className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Register new account
                </button>

                <button className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Link href={"/"}> Back To Home</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Form Akun ENd */}
    </>
  );
};

export default page;

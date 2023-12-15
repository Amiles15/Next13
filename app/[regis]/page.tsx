"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const page = () => {
  tabIndex: Number;

  const [showmodal, setModal] = useState(false);
  const [agama, setagama] = useState("");

  // Simpan data ke local storage
  // const dataSaved = () => {
  //   const data = {
  //     name: name,
  //     TTL: TTL,
  //     alamat: alamat,
  //     pekerjaan: pekerjaan,
  //     hp: hp,
  //     agama: agama,
  //     selectedJK: selectedJK,
  //   };

  //   const dataString = JSON.stringify(data);
  //   localStorage.setItem("data", dataString);

  //   // Panggil fungsi untuk membuat file dari data yang sudah disimpan
  //   // createFileFromLocalStorage(dataString);
  // };

  // modal Function Start
  const dropdownClick = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (showmodal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Membersihkan efek ketika komponen dibongkar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showmodal]);
  //Modal Function End


  return (
    <>
      {/* Form Akun */}
      <div className="w-full">
        <div className="my-4 px-4 flex items-center justify-center col-span-2 rounded-lg">
          <form className="bg-slate-400 rounded-lg xl:w-3/5 lg:min-w-max">
          <div className="my-3 px-4 flex items-center gap-28">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Email :
              </p>
              <input
                id="name"
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-43 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4 flex items-center gap-12">
              <p className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Lengkap :
              </p>
              <input
                id="name"
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="my-3 px-4">

            <div className="font-medium text-base flex items-center gap-11 my-3">
                  <p>Jenis Kelamin :</p>
                  <select
                    className="bg-gray-700 h-9 w-40 rounded-lg text-center text-sm font-light"
                  >
                    <option className="">Pilih Jenis Kelamin</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
            </div>

              <div className="font-medium text-base flex items-center gap-24 my-3">
                  <p>Agama :</p>
                  <select
                    className="bg-gray-700 h-9 w-28 rounded-lg text-center text-sm font-light"
                  >
                    <option className="">Pilih Agama</option>
                    <option value="islam">Islam</option>
                    <option value="kristen">Kristen</option>
                    <option value="hindu">Hindu</option>
                    <option value="budha">Budha</option>
                  </select>
              </div>

              <div className="font-medium text-base flex items-center gap-16 my-3">
                <p className="pr-2">Pekerjaan :</p>
                  <select
                    className="bg-gray-700 w-36 h-9 rounded-lg text-center text-sm font-light"
                  >
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
                <button
                  className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register new account
                </button>

                <button
                  className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 <Link href={'/'}> Back To Home</Link>
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

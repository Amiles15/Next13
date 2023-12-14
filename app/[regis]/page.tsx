"use client";

import React, { useState, useEffect } from "react";

const page = () => {
  tabIndex: Number;

  const [showmodal, setModal] = useState(false);

  //data
  const [name, setname] = useState("");
  const [TTL, setTTl] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [hp, setHp] = useState("");
  const [selectedJK, setSelectedJK] = useState("");
  const [agama, setagama] = useState("");

  // Simpan data ke local storage
  const dataSaved = () => {
    const data = {
      name: name,
      TTL: TTL,
      alamat: alamat,
      pekerjaan: pekerjaan,
      hp: hp,
      agama: agama,
      selectedJK: selectedJK,
    };

    const dataString = JSON.stringify(data);
    localStorage.setItem("data", dataString);

    // Panggil fungsi untuk membuat file dari data yang sudah disimpan
    // createFileFromLocalStorage(dataString);
  };

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

  //Radio Button
  const changeValueJK = (event: any) => {
    setSelectedJK(event.target.value);
  };

  return (
    <>
      {/* Form Akun */}
      <div className="w-full">
        <div className="my-4 px-4 flex items-center justify-center col-span-2 rounded-lg">
          <form className="bg-slate-400 rounded-lg xl:w-3/5 lg:min-w-max">
            <div className="mb-6 px-4">
              <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Lengkap
              </label>
              <input
                id="name"
                value={name}
                type="tetx"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Tempat, Tanggal Lahir
              </label>
              <input
                id="ttl"
                value={TTL}
                type="tetx"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => {
                  setTTl(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alamat
              </label>
              <input
                id="alamat"
                value={alamat}
                type="tetx"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 px-4">
              <fieldset className="flex ">
                <div className="mb-4">Jenis Kelamin :</div>
                <div className="flex items-center px-2 mb-4">
                  <input
                    id="country-option-1"
                    type="radio"
                    name="selectedJK"
                    value="laki"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectedJK === "laki"}
                    onChange={changeValueJK}
                  />
                  <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Laki-Laki
                  </label>
                </div>

                <div className="flex px-4 items-center mb-4">
                  <input
                    id="country-option-2"
                    type="radio"
                    name="selectedJK"
                    value="perempuan"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectedJK === "perempuan"}
                    onChange={changeValueJK}
                  />
                  <label
                    htmlFor="country-option-2"
                    className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Perempuan
                  </label>
                </div>

                {/* dropdown Selection */}
                <div className="font-medium text-base">
                  <select
                    value={agama}
                    onChange={(e) => setagama(e.target.value)}
                    className="bg-white rounded-lg px-8 py-1"
                  >
                    <option>Pilih Agama</option>
                    <option value="islam">Islam</option>
                    <option value="kristen">Kristen</option>
                    <option value="hindu">Hindu</option>
                    <option value="budha">Budha</option>
                  </select>
                </div>
                {/* dropdown Selection End */}
              </fieldset>

              <div className="mb-6">
                <label
                  htmlFor="pekerjaan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pekerjan
                </label>
                <input
                  id="pekerjaan"
                  value={pekerjaan}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  onChange={(e) => {
                    setPekerjaan(e.target.value);
                  }}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  NoHp
                </label>
                <input
                  id="hp"
                  value={hp}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  onChange={(e) => {
                    setHp(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={dataSaved}
                type="submit"
                className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Form Akun ENd */}
    </>
  );
};

export default page;

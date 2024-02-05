"use client";

import React, { useEffect, useState } from "react";
import { Menuinterface } from "@/app/Interface/menuinterface";
import { getData, getImageUrl, postData } from "../apicall/apicallservice";
import { toast } from "sonner";


const page = () => {
  const [matchaMenu, SetmacthaMenu] = useState<Menuinterface[]>([]);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<Menuinterface>({
    title: '',
    category: '',
    description: '',
    harga: '',
    imagePath : '',
  });

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await getData("/listmenu");
        // console.log("Fetched data:", data);
        SetmacthaMenu(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      try {
        const compressedCanvas = await compressAndResizeImage(file);
        const compressedImageUrl = compressedCanvas.toDataURL('image/jpeg', 0.7);
  
        setCompressedImage(compressedImageUrl);
        // Set the data URL to the imagePath in your form state
        setFormData({
          ...formData,
          imagePath: compressedImageUrl,
        });
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };
  
  const compressAndResizeImage = async (file: File) => {
    return new Promise<HTMLCanvasElement>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target?.result;

        if (result && typeof result === 'string') {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (!ctx) {
              reject(new Error('Unable to get 2D context.'));
              return;
            }

            // Set canvas dimensions to 500x500
            const newWidth = 500;
            const newHeight = 500;

            // Draw image on canvas
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            resolve(canvas);
          };

          img.src = result;
        } else {
          reject(new Error('Invalid result type.'));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleOption = (e:any) => {
    const { value } = e.target;

    // Update the formData state with the selected value
    setFormData((prevFormData) => ({
      ...prevFormData,
      category : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formDataWithImage = new FormData();
  
    // Append JSON data to FormData
    formDataWithImage.append('title', formData.title);
    formDataWithImage.append('category', formData.category);
    formDataWithImage.append('description', formData.description);
    formDataWithImage.append('harga', formData.harga);
  
    // Append the image file to FormData
    if (compressedImage) {
      const blob = await fetch(compressedImage).then((r) => r.blob());
      formDataWithImage.append('image', blob, 'image.jpg');
    }
  
    console.log('formData', formData);
  
    // Use the postData function to send the data
    const data = await postData('/listmenu', formDataWithImage);
  
    if (data) {
      toast.success('Data Berhasil Dikirim')
      // Handle success as needed
    } else {
      toast.error('Error Terjadi Kesalahan')
      // Handle error as needed
    }
    // console.log('formDataWithImage', formDataWithImage);
  };
  
  return (
    <>
      <h1 className="text-center my-3">Our Matcha Menu</h1>
      <div className="w-full flex flex-wrap justify-center mb-4 border border-red-500 rounded-lg">
        {matchaMenu?.map((menuItem) => (
          <div
            key={menuItem._id}
            className="flex items-center justify-center sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
          >
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {menuItem.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {menuItem.description}
              </p>
              <div className="flex justify-center">
                <img
                  src={getImageUrl(menuItem.imagePath)}
                  alt={menuItem.title}
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <p className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">
                Rp. {menuItem.harga}
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
        ))}
      </div>

      <div className="flex w-full px-2 gap-2">
        <div className="xl:w-1/2 lg:w-full flex border border-gray-400 rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="px-2 my-2">
              <div className="flex items-center">
                <p className="px-2 w-40">Nama Matcha :</p>
                <input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light my-1"
                />
              </div>
              <div className="flex items-center">
                <p className="px-2 w-40">Jenis Matcha :</p>
                <select onChange={handleOption} className="select max-w-xs shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light my-1">
                  <option>Pilih Jenis Matcha</option>
                  <option value={'Matcha'}>Matcha</option>
                  <option value={'Non Matcha'}>Non Matcha</option>
                </select>
              </div>
              <div className="flex items-center">
                <p className="px-2 w-40">Deskripsi Matcha :</p>
                <input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light my-1"
                />
              </div>
              <div className="flex items-center">
                <p className="w-40 px-2">Harga :</p>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-9 h-9"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="M239.133,245.813c9.995-8.545,15.885-21.184,15.885-34.36c0-24.902-20.259-45.16-45.162-45.16
                          l-36.783,0.004c-4.626,0-8.377,3.751-8.377,8.377v2.424v13.871v129.948c0,1.782,1.445,3.226,3.226,3.226h15.149
                          c1.782,0,3.226-1.445,3.226-3.226v-64.299h23.56l0.222-0.004c12.869,0.119,23.338,10.688,23.338,23.557v40.745
                          c0,1.782,1.445,3.226,3.226,3.226h15.149c1.782,0,3.226-1.445,3.226-3.226v-40.745
                          C255.019,266.999,249.128,254.358,239.133,245.813z M210.107,235.013h-23.81v-47.114h23.56l0.235-0.003
                          c15.821,0.154,28.013,16.108,21.566,32.702C228.552,228.594,218.684,235.013,210.107,235.013z"
                        />
                        <path
                          d="M308.917,225.178c-6.56,0-12.737,1.743-18.144,4.808v-3.705c0-1.886-1.529-3.415-3.415-3.415
                          h-15.567c-1.886,0-3.415,1.529-3.415,3.415v116.011c0,1.886,1.529,3.415,3.415,3.415h15.567c1.886,0,3.415-1.529,3.415-3.415
                          v-41.13c5.406,3.065,11.584,4.808,18.144,4.808c21.166,0,38.386-18.122,38.386-40.396S330.084,225.178,308.917,225.178z
                          M308.917,285.47c-9.862,0-17.886-8.926-17.886-19.896c0-10.971,8.023-19.896,17.886-19.896c9.862,0,17.887,8.925,17.887,19.896
                          C326.804,276.544,318.78,285.47,308.917,285.47z"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    value={formData.harga}
                    onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                    type="number"
                    className="block my-1 w-1/2 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="my-2 px-2">
              <input
                onChange={handleImageChange}
                className="block w-56 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                name='imagePath'
              ></input>
            </div>
            <div className="flex justify-center my-2">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                KIRIM
              </button>
            </div>
          </form>
        </div>

        <div className="xl:w-1/2 lg:w-full border border-gray-500 rounded-xl">
          {compressedImage && (
            <div>
              <h3>Compressed Image Preview:</h3>
              <img
                src={compressedImage}
                alt="Compressed"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Menuinterface } from "@/app/Interface/menuinterface";
import { getData, getImageUrl } from "@/app/page/apicall/apicallservice";

const SliderComp = () => {
  
  const [matchaMenu, SetmacthaMenu] = useState<Menuinterface[]>([]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await getData();
        // console.log("Fetched data:", data);
        SetmacthaMenu(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <div className="p-28">
        <h1 className="text-center font-semibold text-lg">New Arrival</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <Slider {...settings} className="w-9/12">
          {matchaMenu?.map((menuItem, index) => (
            <div
              className="card rounded-lg border-md overflow-hidden cursor-pointer md:h-[280px] border-[8px]"
              key={index}
            >
              <div className="card-top w-full bg-slate-400 ">
                <span className=" bg-slate-500 bg-opacity-10">
                  <h1 className="px-2">{menuItem.title}</h1>
                </span>
                <img className="mx-auto md:-z-50"
                  src={getImageUrl(menuItem.imagePath)}
                  alt={menuItem.title}
                  style={{ maxWidth: "180px"}}
                />
              </div>
              <h4 className="px-4">{menuItem.description}</h4>
              <h2 className="px-2">Rp.{menuItem.harga}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComp;

'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComp = () => {
  const DataNewMenus = [
    {
      imagesrc: "/src/Matcha/blueberrymatcha.jpg",
      title: "Blueberry Matcha",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
      harga:'Rp.40.000'
    },

    {
      imagesrc: "/src/Matcha/MatchaSakura.jpg",
      title: "Matcha Sakura",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
      harga:'Rp.25.000'
    },

    {
      imagesrc: "/src/Matcha/strawberryMatcha.jpg",
      title: "Strawberry Matcha",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
      harga:'22.000'
    },
    {
      imagesrc: "/src/matcha.jpg",
      title: "Matcha Nihonjin",
      description: "Our Mactha Is Best Flafour",
      buttonText: "Read more",
      harga:'20.000'
    },
  ];
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

  return (
    <><div>
      <h1 className="text-center font-semibold text-lg">New Arrival</h1>
    </div>
    <div className="w-full flex justify-center items-center mt-8">
        <Slider {...settings} className="w-9/12">
          {DataNewMenus.map((item, index) => (
            
            <div className="card rounded-lg border-md overflow-hidden cursor-pointer md:h-[280px] border-[8px]" key={index}>
              <div className="card-top w-full bg-slate-400">
                <span className="z-40 bg-slate-500 bg-opacity-10">
                   <h1 className="px-2">{item.title}</h1>
                   <h2 className="px-2">{item.harga}</h2>
                </span>
                <img src={item.imagesrc} alt={item.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </>
  );
};

export default SliderComp;

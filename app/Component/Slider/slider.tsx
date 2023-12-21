'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComp = () => {
  const DataNewMenus = [
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
  

<div className="w-full flex justify-center items-center mt-8">
  <Slider {...settings} className="w-9/12">
    {DataNewMenus.map((item, index) => (
      <div className="card rounded-lg border-md overflow-hidden cursor-pointer h-[400px] border-[8px]" key={index}>
        <div className="card-top">
          <img src={item.imagesrc} alt={item.title} />
          <h1 className="px-2">{item.title}</h1>
        </div>
        {/* Uncomment the following lines if you have 'price' and 'category' in your data */}
        {/* <div className="card-bottom">
            <h3>{item.price}</h3>
            <span className="category">{item.category}</span>
          </div> */}
      </div>
    ))}
  </Slider>
</div>

  );
};

export default SliderComp;

import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="pt-16">
      <Carousel
        className="grid grid-cols-2 place-items-center z-10"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        
      <div className="relative overflow-x-hidden">
        <img
          src="/abstract-textured-backgound.jpg"
          alt=""
          className="h-60 xl:h-screen sm:h-96 w-full"
        />
        <div className="flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center justify-between gap-5 px-4 bg lg:px-10"
            
          >
            <div className="text-white space-y-3" data-aos="fade-right">
              <h2 className=" text-2xl lg:text-5xl font-bold  ">
              Awesome Range of Thermosteel Items
              </h2>
              <p className="text-sm lg:text-2xl">Enduring Elegance: Steel Utensils That Last a Lifetime</p>
            </div>
            <div className=" flex items-center w-80 lg:w-auto justify-center" data-aos="fade-left">
              <img src="/hero1.png" alt="" className="w-full lg:w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-hidden">
        <img
          src="/abstract-textured-backgound.jpg"
          alt=""
          className="h-60 xl:h-screen sm:h-96 w-full"
        />
        <div className="flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center justify-between gap-5 px-4 bg lg:px-10"
            
          >
            <div className="text-white space-y-3" data-aos="fade-right">
              <h2 className=" text-2xl lg:text-5xl font-bold  ">
              Awesome Range of Thermosteel Items
              </h2>
              <p className="text-sm lg:text-2xl">Enduring Elegance: Steel Utensils That Last a Lifetime</p>
            </div>
            <div className=" flex items-center w-80 lg:w-auto justify-center" data-aos="fade-left">
              <img src="/hero1.png" alt="" className="w-full lg:w-full" />
            </div>
          </div>
        </div>
      </div>
      </Carousel>
      
    </div>
  );
};

export default Hero;

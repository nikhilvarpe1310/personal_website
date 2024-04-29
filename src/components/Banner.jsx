import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import bannerImage from "../assets/abc.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-2/3 text-white text-center md:text-left px-4 md:ms-10">
        <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
        <h1 className="text-4xl md:text-5xl font-bold">Nikhil Babasaheb Varpe</h1>
        <h2 className="text-2xl md:text-3xl">
          I am <span className="font-bold underline" ref={el}></span>
        </h2>
        <p className="text-sm md:text-base">
        Innovative and deadline-driven Web Developer looking forward to work with an 
        organization that provides me an opportunity 
        to grow and to exploit my potential to
         excel in the area of my preview so as to Help the organization in the accomplishment of its goal.
        </p>

        <div className="icons-container flex space-x-3 md:space-x-5 my-4">
          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 md:px-3 py-3 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="#"
          >
            <i className="fab fa-facebook text-2xl md:text-4xl"></i>
          </a>

          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 md:px-3 py-3 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="#"
          >
            <i className="fab fa-instagram text-2xl md:text-4xl"></i>
          </a>

          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 md:px-3 py-3 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="#"
          >
            <i className="fab fa-youtube text-2xl md:text-4xl"></i>
          </a>

          <a
            className="hover:bg-orange-600 border cursor-pointer px-2 md:px-3 py-3 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800"
            href="#"
          >
            <i className="fab fa-linkedin-in text-2xl md:text-4xl"></i>
          </a>
        </div>

        <a
          className="text-lg md:text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
          href="/contact"
        >
          Contact Me
        </a>
      </div>

      <div className="w-full flex justify-center">
        <img className="rounded-full my-4 md:my-2 shadow-lg w-48 md:w-fit" src={bannerImage} alt="profile" />
      </div>
    </div>
  );
};

export default Banner;

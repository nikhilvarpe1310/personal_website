import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);

  return (
    <>
      <div className="main-container py-8 md:py-14">
        <h1 className="text-3xl md:text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-y-6 md:space-y-0 md:flex md:space-x-5 md:px-10 mt-6">
          <div className="hover:bg-gray-100 px-5 md:p-5 text-center shadow-lg rounded-xl bg-slate-100">
            <i className="text-4xl md:text-5xl fa-brands fa-aws"></i>
            <h1 className="text-2xl md:text-4xl mt-2">Web Development</h1>
            <p className="text-sm md:text-base">
            Web development is the process of creating websites or web applications
             that are accessible via the internet.It involves web design, 
             web content development,
        
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl md:text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="hover:bg-gray-100 px-5 md:p-5 text-center shadow-lg rounded-xl bg-slate-100">
            <i className="text-4xl md:text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-2xl md:text-4xl mt-2">Android Development</h1>
            <p className="text-sm md:text-base">
            Android development refers to the process of creating applications
             that run on devices powered by the Android operating system.
             Android is one of the most popular mobile operating systems globally, developed by Google
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl md:text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="hover:bg-gray-100 px-5 md:p-5 text-center shadow-lg rounded-xl bg-slate-100">
            <i className="text-4xl md:text-5xl fa-solid fa-server"></i>
            <h1 className="text-2xl md:text-4xl mt-2">Backend Development</h1>
            <p className="text-sm md:text-base">
            Backend development refers to the development of the server-side logic and components
             of a web application, software, or any other digital system. 
            It involves building the part of an application that is responsible for managing data,
             processing requests from the client-side, and ensuring the smooth functioning of the entire application.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl md:text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

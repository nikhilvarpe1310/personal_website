import React from "react";
import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Nikhil Babasaheb Varpe");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Services",
      link: "/services",
      id: 4,
    },
    {
      title: 'Contact',
      link: '/Contact',
      id: 5,
    },
  ]);

  const [actionButton] = useState({
    title: "Download cv",
    link: "hire-me",
  });

  const handleDownload = () => {
    // Replace the link below with the actual path to your PDF file
    const pdfPath = "resume.pdf";
    
    // Creating an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <>
      <div className="h-20 border main flex flex-col md:flex-row justify-between items-center px-4 md:px-16 bg-gray-100">
        <div className="mb-4 md:mb-0">
          {/* Brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:items-center">
          {/* Menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="block md:inline-block hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/* Download Button */}
          <button onClick={handleDownload} className="block md:inline-block px-4 py-2 bg-orange-500 shadow rounded-full text-1xl">
            {actionButton.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

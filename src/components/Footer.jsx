const Footer = () => {
    return (
      <div className="py-5 border bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base">
            &copy; 2024 Nikhil Babasaheb Varpe <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="flex space-x-5">
          <a href="/about" className="hover:underline text-sm md:text-base">
            About
          </a>
          <a href="/privacy-policy" className="hover:underline text-sm md:text-base">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline text-sm md:text-base">
            Licensing
          </a>
          <a href="/contact" className="hover:underline text-sm md:text-base">
            Contact
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
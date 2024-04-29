import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <div className="mt-2">
      <h1 className="mb-8 text-3xl md:text-5xl font-bold underline text-center">
        My Expertise
      </h1>
      {/* box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="box-container flex flex-col md:flex-row items-center py-8 md:py-16"
      >
        <div className="flex text-white justify-center mb-6 md:mb-0">
          {/* text container */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              I love these technologies
            </h1>
            <p className="text-sm md:text-base">
            I've loved my skills in HTML, CSS, and JavaScript to create visually stunning and responsive user interfaces that not only look great but also offer a seamless user experience. On the back-end, 
            I'm proficient in multiple programming languages such as JAVA & PHP allowing me to build.
            </p>
            <button className="text-xl md:text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* skills container */}
          <div className="flex flex-wrap justify-center space-x-3 space-y-3 w-full md:w-2/3">
            {/* Your skills */}
            <p className=" bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full "> Core Java
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Hibernet(ORM tool)
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Spring Framework
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Spring Boot Framework
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Spring Security
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Javascript
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            ReactJS
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            NextJS
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            NodeJS
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Tailwind CSS
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Angular
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            PHP
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Html 5
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Codeigniter Framework
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Laravel Framework 
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            C
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            AWS Cloud
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            EC2
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            MySQL
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Mongodb
            </p>
            <p className=" bg-gray-300 w-fit px-3 py-2 rounded-full ">
            Postgresql
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

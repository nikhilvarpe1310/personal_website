import { useState } from 'react';
import bannerImage from '../assets/dev.png';

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: 'Java Developer, Php Developer & ReactJS Developer',
    desc1: `Hello! I'm Nikhil Varpe, a passionate and experienced full-stack web developement with a strong foundation in both front-end and back-end technologies. Over the years, I've honed my skills in HTML, CSS, and JavaScript to create visually stunning and responsive user interfaces that not only look great but also offer a seamless user experience. On the back-end, I'm proficient in multiple programming languages such as JAVA & PHP node js allowing me to build robust server-side logic, manage databases, and handle data efficiently. I'm well-versed in various web development frameworks and tools, including Reactjs,SpringBoot,Spring. What sets me apart is my afality to bridge the gap between design and functionality, working closely with designers to bring their visions to life while ensuring that the technical aspects run smoothly. I'm also a firm believer in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.`,
    // desc2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, 
    //     aliquam! Ut ipsam molestias nemo eligendi? Ullam ipsam blanditiis commodi placeat, 
    //     eligendi inventore quae nemo cumque molestiae minus nesciunt dolorum illo.`,
    actionButton: {
      title: 'Read More..',
      link: '/readmore',
    },
  });

  return (
    <div className="main-container border py-8 md:py-16">
      <h1 className="text-center pb-8 md:pb-16 text-3xl md:text-5xl underline font-bold">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:max-w-md" src={data.image} alt="Nikhil Varpe" />
        </div>

        {/* Text container */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <div className="space-y-5 w-4/5 md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-semibold">{data.title}</h1>
            <p className="text-sm md:text-base">{data.desc1}</p>
            <p className="text-sm md:text-base">{data.desc2}</p>
            <button className="bg-orange-500 px-3 py-2 text-xl md:text-2xl rounded-full shadow-lg">
              {data.actionButton.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

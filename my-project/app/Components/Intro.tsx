import React from "react";

const Intro: React.FC = () => {
  return (
    <section className="w-full min-h-[80vh] bg-white flex items-center px-8 md:px-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I am Uzair Shahid,
            <br />
            <span className="text-gray-900">Software Engnieer</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            A Software Engineer is a problem-solving professional who designs, 
            develops, and maintains software applications. They use modern 
            technologies and programming skills to build efficient, scalable, 
            and reliable solutions that solve real-world problems and deliver 
            value to users and businesses.
          </p>

          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md shadow transition">
            Download Resume
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 rounded-full bg-gray-200 p-2">
            <img
              src="/assets/picture/myImage.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

import React from "react";
import banner from "/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between my-16 pt-16">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-8 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold leading-tight">
            Discover the joy of reading{" "}
            <span className="text-blue-600">new stories every day!</span>
          </h1>
          <p className="text-md md:text-lg font-poppins text-gray-600">
            Step into a world of books where every genre and tale is at your
            fingertips. Whether you're seeking inspiration, excitement, or
            knowledge, there's something here for everyone.
          </p>

          {/* Email Input */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <label className="input input-bordered flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow font-poppins focus:outline-none"
                placeholder="Enter your email"
              />
            </label>

            <button className="btn mt-4 bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg font-poppins">
              Get Started
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 pt-8 md:pt-0">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            <div className="absolute w-full h-full bg-blue-300 rounded-full opacity-30 -top-8 -left-8"></div>
            <img
              src={banner}
              alt="Banner"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WELCOME_MESSAGE = "The definition of latest technology for property monitoring and management. " +
    "Get the latest technology in market today.";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Intropage = () => {
  const { width, height } = useWindowDimensions();

  // Determine if the viewport dimensions match the hide criteria
  const shouldHideSection = width <= 904 && height <= 400;

  return (
    <div className="h-screen flex flex-col bg-cover">
      <div className="flex-grow flex justify-center items-center mt-20">
        <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-black rounded-3xl bg-opacity-75 text-white">
          <h1 className="text-4xl md:text-4xl font-bold">Property Management System</h1>
          <p className={`my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg ${shouldHideSection ? 'hidden' : 'block'}`}>
            {WELCOME_MESSAGE}
          </p>
          <br />
          <div className="flex space-x-14">
            <button className="px-10 py-5 bg-gray-500 text-white rounded-full">
              <a href="" className="p-1 text-gray-100">
                <Link to="/user/register">Register</Link>
              </a>
            </button>
            <button className="px-10 py-5 bg-gray-500 text-white rounded-full">
              <a href="" className="p-1 text-gray-100">
                <Link to="/user/login">Login in</Link>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intropage;

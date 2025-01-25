import { useEffect, useState } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.querySelector("body");
    if (darkMode) {
      body?.classList?.remove("dark");
      localStorage.removeItem("darkMode");
      setDarkMode(false);
    } else {
      body?.classList?.add("dark");
      localStorage.setItem("darkMode", "enabled");
      setDarkMode(true);
    }
  };
  useEffect(() => {
    (() => {
      const darkMode = localStorage.getItem("darkMode");
      const body = document.querySelector("body");
      if (darkMode) {
        body?.classList?.add("dark");
        setDarkMode(true);
      } else {
        body?.classList?.remove("dark");
        setDarkMode(false);
      }
    })();
  }, []);

  return (
    <nav className="bg-secondary_Background text-primary_Text p-4 flex flex-row items-center justify-between font-semibold px-8 drop-shadow-xl">
      <div className="flex items-center text-lg md:text-3xl font-bold relative">
        <BsLightningCharge className="text-yellow-500 md:text-5xl" />
        <span>Assessment</span>
        <span className="bg-green-500 text-xs px-1 text-white absolute -right-10 top-0 ">
          PRO
        </span>
      </div>
      <ul className="flex space-x-4 max-sm:hidden">
        <li className="flex items-center">
          <a href="#">About Us</a>
          <IoIosArrowDown size={20} />
        </li>
        <li className="flex items-center">
          <a href="#">Learn More</a>
          <IoIosArrowDown size={20} />
        </li>
        <li className="flex items-center">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        {darkMode ? (
          <MdOutlineLightMode
            size={30}
            className="cursor-pointer"
            onClick={toggleDarkMode}
          />
        ) : (
          <MdOutlineDarkMode
            size={30}
            className="cursor-pointer"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

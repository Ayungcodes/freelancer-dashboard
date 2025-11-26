import DateAndTime from "../components/DateAndTime";
import ThemeToggle from "../components/ThemeToggle";
import { useState } from "react";
import Dashboard from "../components/Dashboard";

const Navbar = ({ darkMode, setDarkMode, name, userMail }) => {
  const [openNav, setNavOpen] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  const toggleDashboard = () => {
    setDashboard((prev) => !prev);
  };
  return (
    <nav className="w-screen py-5 px-2 mx-auto">
      <div className="flex flex-col gap-4 w-full">
        {/* top bar */}
        <div className="flex justify-between items-center">
          <div>
            <DateAndTime />
          </div>
          <div className="space-x-2">
            <button className="cursor-pointer">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="cursor-pointer">
              <i class="fa-regular fa-bell"></i>
            </button>
            <button onClick={toggleNav} className="space-y-1 z-99999">
              <span
                className={`h-[2px] w-[16px] md:w-9 block rounded-full transition-all duration-200 ${
                  darkMode ? "bg-[#e1dcdc]" : "bg-[#333333]"
                } ${
                  openNav
                    ? "rotate-45 translate-y-[3px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
              <span
                className={`h-[2px] w-[16px] md:w-[26px] block rounded-full transition-all duration-200 ${
                  darkMode ? "bg-[#e1dcdc]" : "bg-[#333333]"
                } ${
                  openNav
                    ? "-rotate-45 -translate-y-[3px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* nav items bar */}
        <div className="flex justify-center items-center">
          <button
            onClick={toggleDashboard}
            className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            } ${dashboard ? "underline underline-offset-2" : "no-underline"}`}
          >
            Dashboard
          </button>
          <button
            className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
          >
            Clients
          </button>
          <button
            className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
          >
            Tasks
          </button>
          <button
            className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
          >
            Analytics
          </button>
          <button
            className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"
            }`}
          >
            Settings
          </button>
        </div>
      </div>
      {/* toggleBtn nav */}
      <div
        className={`top-0 left-0 right-0 border-t border-stone-600 ${
          openNav
            ? "w-screen h-screen opacity-100 pointer-events-auto"
            : "w-0 h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col w-full px-3 gap-6 text-lg py-14">
          <div
            className={`transition-all duration-200 ${
              darkMode ? "hover:text-white" : "hover:text-gray-700"
            }`}
          >
            {userMail}
          </div>
          <div className={`flex justify-between transition-all duration-200 ${
              darkMode ? "hover:text-white" : "hover:text-gray-700"
            }`}>
            <h1>Account Settings</h1>
            <button>
              <i class="fa-solid fa-gear"></i>
            </button>
          </div>
          <div className="flex justify-between">
            <h1>Theme</h1>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div>Home Page</div>
          <div>Help</div>
          <div>About</div>
        </div>
      </div>
      {/* dashboard */}
      <div
        className={`w-screen relative top-0 right-0 left-0 mt-4 ${
          dashboard
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Dashboard name={name} darkMode={darkMode} />
      </div>
    </nav>
  );
};

export default Navbar;

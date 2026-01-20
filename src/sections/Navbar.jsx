import { NavLink } from "react-router";
import DateAndTime from "../components/DateAndTime";
import ThemeToggle from "../components/ThemeToggle";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode, userMail }) => {
  const [openNav, setNavOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className="w-screen py-5 px-3 md:px-8 mx-auto">
      <div className="flex flex-col gap-6 w-full">
        {/* top bar */}
        <div className="flex justify-between items-center">
          {/* left */}
          <div className="relative z-[9999]">
            <DateAndTime />
          </div>
          {/* right */}
          <div className="space-x-2">
            <button
              className="cursor-pointer md:text-lg"
              // onClick={() => setShowSearch((prev) => !prev)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <button className="cursor-pointer md:text-lg">
              <i class="fa-regular fa-bell"></i>
            </button>
            <button
              onClick={toggleNav}
              className="space-y-1.5 relative z-[9999]"
            >
              <span
                className={`h-[2px] w-[16px] md:w-[26px] block rounded-full transition-all duration-200 ${
                  darkMode ? "bg-[#e1dcdc]" : "bg-[#333333]"
                } ${
                  openNav
                    ? "rotate-45 translate-y-[4px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
              <span
                className={`h-[2px] w-[16px] md:w-[26px] block rounded-full transition-all duration-200 ${
                  darkMode ? "bg-[#e1dcdc]" : "bg-[#333333]"
                } ${
                  openNav
                    ? "-rotate-45 -translate-y-[4px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* nav items bar */}
        <div className="flex justify-evenly lg:justify-center lg:gap-9 items-center text-[15px] md:text-[18px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "opacity-100 font-semibold underline underline-offset-2" // active styles
                : "opacity-70 transition-all hover:opacity-100"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive
                ? "opacity-100 font-semibold underline underline-offset-2" // active styles
                : "opacity-70 transition-all hover:opacity-100"
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "opacity-100 font-semibold underline underline-offset-2" // active styles
                : "opacity-70 transition-all hover:opacity-100"
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "opacity-100 font-semibold underline underline-offset-2" // active styles
                : "opacity-70 transition-all hover:opacity-100"
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "opacity-100 font-semibold underline underline-offset-2" // active styles
                : "opacity-70 transition-all hover:opacity-100"
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
      {/* toggle nav */}
      <div
        className={`fixed top-0 left-0 right-0 w-screen h-screen flex justify-center mt-14 px-2 ${
          darkMode ? "bg-[#000]" : "bg-[#f0f0f0]"
        } ${
          openNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-10`}
      >
        <div className="flex flex-col w-full px-2 md:px-4 gap-6 text-lg md:text-xl py-14">
          <div
            className={`transition-all duration-200 ${
              darkMode ? "hover:text-white" : "hover:text-gray-700"
            }`}
          >
            {userMail}
          </div>
          <div
            className={`flex justify-between transition-all duration-200 ${
              darkMode ? "hover:text-white" : "hover:text-gray-700"
            }`}
          >
            <h1>Account Settings</h1>
            <button>
              <i class="fa-solid fa-gear"></i>
            </button>
          </div>
          <div className="flex justify-between">
            <h1>Theme</h1>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div>Home</div>
          <div>Help</div>
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

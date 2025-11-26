import ThemeToggle from "./ThemeToggle";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="">
      <div className="flex flex-col w-screen">
         {/* top bar */}
        <div className="flex justify-between items-center p-3">
          <div>
            <h1>Welcome back, Gaius👋🏾</h1>
          </div>
          <div className="space-x-2">
            <button className="cursor-pointer">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="cursor-pointer">
              <i class="fa-regular fa-bell"></i>
            </button>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        {/* nav items bar */}
        <div className="flex justify-between items-center p-3 flex-nowrap">
            <button className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}>
                Dashboard
            </button>
            <button className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}>
                Clients
            </button>
            <button className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}>
                Tasks
            </button>
            <button className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}>
                Analytics
            </button>
            <button className={`cursor-pointer py-1 px-2 rounded-md transition-all duration-400 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300"}`}>
                Settings
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

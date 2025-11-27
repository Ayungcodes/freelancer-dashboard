import Dashboard from "./sections/Dashboard";
import Navbar from "./sections/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [dashboard, setDashboard] = useState(true);

   const toggleDashboard = () => {
    setDashboard((prev) => !prev);
  };

  let name = "Gaius"
  let userMail = "gaiusemmanuel12@gmail.com"

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} name={name} userMail={userMail} dashboard={dashboard} toggleDashboard={toggleDashboard} />
      <Dashboard name={name} darkMode={darkMode} dashboard={dashboard} />
    </main>
  );
};

export default App;

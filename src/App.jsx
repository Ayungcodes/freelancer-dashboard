import { Routes, Route } from "react-router";
import Clients from "./sections/Clients";
import Dashboard from "./sections/Dashboard";
import { useState, useEffect } from "react";
import Tasks from "./sections/Tasks";
import Analytics from "./sections/Analytics";
import Settings from "./sections/Settings";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  let name = "Gaius";
  let userMail = "gaiusemmanuel12@gmail.com";

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
    <>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                name={name}
                darkMode={darkMode}
                userMail={userMail}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/clients"
            element={
              <Clients
                darkMode={darkMode}
                userMail={userMail}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                darkMode={darkMode}
                userMail={userMail}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/analytics"
            element={
              <Analytics
                darkMode={darkMode}
                userMail={userMail}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                userMail={userMail}
                setDarkMode={setDarkMode}
              />
            }
          />
        </Routes>
    </>
  );
};

export default App;

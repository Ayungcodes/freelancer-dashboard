import Navbar from "./Navbar";
import Card from "../components/Card";
import { useState } from "react";

const Tasks = ({
  darkMode,
  userMail,
  setDarkMode,
  tasks,
  totalTasks,
  activeTasks,
  completedTasks,
  overdueTasks,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-2 md:px-8 lg:px-20 flex flex-col items-center overflow-x-hidden w-screen pb-10">
      {/* navbar */}
      <div>
        <Navbar
          darkMode={darkMode}
          userMail={userMail}
          setDarkMode={setDarkMode}
        />
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-3 mt-10 w-full">
        <Card title="Total Tasks" value={totalTasks} darkMode={darkMode} />
        <Card title="Active Tasks" value={activeTasks} darkMode={darkMode} />
        <Card
          title="Completed Tasks"
          value={completedTasks}
          darkMode={darkMode}
        />
        <Card title="Overdue Tasks" value={overdueTasks} darkMode={darkMode} />
      </div>
      {/* search and add tasks */}
      <div className="flex justify-between gap-3 mt-8 w-full">
        <div className="lg:w-[83%] md:w-[70vw] w-[62vw] flex items-center gap-2 border border-stone-500 rounded-lg px-3 py-1">
          <i className="fa-solid fa-magnifying-glass text-stone-500"></i>

          <input
            type="search"
            name="search tasks"
            id="search"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm"
          />
        </div>
        <button
          className={`lg:w-[13vw] md:w-[30vw] w-[38vw] py-1.5 rounded-md ${
            darkMode
              ? "bg-gray-50 text-[#333333] hover:bg-gray-200"
              : "bg-[#000] text-gray-50"
          }`}
        >
          + Add Task
        </button>
      </div>

      {/* search area */}
      <div
        className={`shadow-sm w-full mt-8 md:px-4 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      >
        {/* Search Results */}
        <div>
          {filteredTasks.length === 0 && (
            <p className="text-neutral-500 text-sm py-2 px-3">
              No tasks found.
            </p>
          )}

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center py-3 md:py-5 border-b last:border-b-0 ${
                darkMode
                  ? "hover:bg-stone-800 border-stone-700"
                  : "hover:bg-gray-50 border-gray-400"
              } transition`}
            >
              <div className="px-2">
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-400/90">{task.client}</p>
              </div>
              <div className="flex items-center gap-4 px-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;

import Navbar from "./Navbar";
import Card from "../components/Card";
import { useState } from "react";

const Tasks = ({ darkMode, userMail, setDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    { id: 1, title: "Landing page", client: "Mr. Dalung", status: "Completed" },
    {
      id: 2,
      title: "Backend API setup",
      client: "Mr. Thaddeus",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Design homepage",
      client: "Miss. Olabamidele",
      status: "Pending",
    },
    {
      id: 4,
      title: "Create wireframe",
      client: "Mr. Bako",
      status: "Pending",
    },
    {
      id: 5,
      title: "Send proposal",
      client: "Blast Media",
      status: "Pending",
    },
    {
      id: 6,
      title: "Design aboutpage",
      client: "Mrs. Chukwuebuka",
      status: "Pending",
    }
  ];

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-2 flex flex-col items-center overflow-x-hidden">
      {/* navbar */}
      <div>
        <Navbar
          darkMode={darkMode}
          userMail={userMail}
          setDarkMode={setDarkMode}
        />
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-3 mt-8">
        <Card title="Total Tasks" value={27} darkMode={darkMode} />
        <Card title="Active Tasks" value={10} darkMode={darkMode} />
        <Card title="Completed Tasks" value={12} darkMode={darkMode} />
        <Card title="Overdue Tasks" value={5} darkMode={darkMode} />
      </div>
      {/* search and add tasks */}
      <div className="flex justify-between w-full items-center mt-8">
        <input
          type="search"
          name="search tasks"
          id="search"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border w-[60vw] border-stone-600 py-1 px-3 rounded-md"
        />
        <button
          className={`py-1 px-3 rounded-md ${
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
        className={`shadow-sm w-full mt-8 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      >
        {/* Search Results */}
        <div className="space-y-2">
          {filteredTasks.length === 0 && (
            <p className="text-neutral-500 text-sm">No tasks found.</p>
          )}

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center px-4 py-3 border-b border-stone-600 last:border-b-0 ${
                darkMode ? "hover:bg-stone-800" : "hover:bg-gray-50"
              } transition`}
            >
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-500">{task.client}</p>
              </div>
              <div className="flex items-center gap-4">
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

      {/* tasks */}
      <div
        className={`shadow-sm w-full mt-8 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      ></div>
    </section>
  );
};

export default Tasks;

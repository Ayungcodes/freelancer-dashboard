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
  clients,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [addTasksArea, setAddTasksArea] = useState("false");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleOpenTasks = () => {
    setAddTasksArea((prev) => !prev);
  };
  const [nowTasks, setNowTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  })
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedClient, setAssignedClient] = useState("");

  const handleSubmit = () => {
    if (!title || !desc || !deadline || !assignedClient) {
      // alert("Fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      desc,
      status,
      deadline,
      client: assignedClient,
    };

    console.log("Task added:", newTask);

    const updatedTasks = [...nowTasks, newTask];
    setNowTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTitle("");
    setDesc("");
    setDeadline("");
    setAssignedClient("");
  };

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
          onClick={handleOpenTasks}
        >
          + Add Task
        </button>
        <div
          className={`fixed w-screen bottom-0 left-0 ${
            darkMode ? "bg-stone-800/95" : "bg-white/95"
          } backdrop-blur-sm z-50 overflow-hidden transition-all duration-500 ease-in-out ${
            addTasksArea
              ? "h-[62vh] opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4 mt-8 px-2">
            {/* Title */}
            <input
              type="text"
              placeholder="Task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-2 px-3 border border-stone-500 rounded-md w-[70vw] focus:ring focus:ring-stone-300"
            />

            {/* Description */}
            <textarea
              placeholder="Task description..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="resize-none border border-stone-500 rounded-md w-[70vw] h-[100px] py-2 px-3 focus:ring focus:ring-stone-300"
            ></textarea>

            {/* Deadline */}
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="py-2 px-3 border border-stone-500 rounded-md w-[70vw]"
            />

            {/* Select Client */}
            <select
              value={assignedClient}
              onChange={(e) => setAssignedClient(e.target.value)}
              className="py-2 px-3 border border-stone-500 rounded-md w-[70vw] bg-transparent"
            >
              <option value="" className="text-stone-600 bg-stone-300">Select Client</option>

              {clients.map((c) => (
                <option key={c.id} value={c.name} className="text-stone-900 text-[14px] bg-stone-300">
                  {c.name}
                </option>
              ))}
            </select>

            {/* Status */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  onChange={(e) => setStatus(e.target.value)}
                />
                Active
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  onChange={(e) => setStatus(e.target.value)}
                />
                Inactive
              </label>
            </div>

            {/* Submit button */}
            <button
              onClick={() => {
                handleSubmit();
                handleOpenTasks();
              }}
              className={`py-1 rounded-md w-[30vw] ${
                darkMode ? "bg-white text-black" : "bg-[#333333] text-white"
              }`}
            >
              Add
            </button>
          </div>
        </div>
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

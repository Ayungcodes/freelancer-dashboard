import Navbar from "./Navbar";
import Card from "../components/Card";
import { useState } from "react";

const Tasks = ({
  darkMode,
  userMail,
  setDarkMode,
  tasks,
  clients,
  setTitle,
  setDesc,
  taskStatus,
  setTaskStatus,
  setDeadline,
  setAssignedClient,
  title,
  desc,
  deadline,
  assignedClient,
  handleSubmit,
  handleDeleteTask,
  editTaskArea,
  setEditTaskArea,
  handleTaskEditArea,
  handleUpdateTask,
  handlerDeleteTaskAtEdit,
}) => {
  // task stats
  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((c) => c.status === "Active").length;
  const completedTasks = tasks.filter((c) => c.status === "Inactive").length;
  const overdueTasks = tasks.filter((c) => c.status === "Overdue").length;

  // search and add tasks area state
  const [searchTerm, setSearchTerm] = useState("");
  const [addTasksArea, setAddTasksArea] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleOpenTasks = () => {
    setAddTasksArea((prev) => !prev);
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
          className={`lg:w-[13vw] md:w-[30vw] w-[38vw] py-1.5 rounded-md cursor-pointer ${
            darkMode
              ? "bg-gray-50 text-[#333333] hover:bg-gray-200"
              : "bg-[#000] text-gray-50"
          }`}
          onClick={handleOpenTasks}
        >
          + Add Task
        </button>

        {/* Add Tasks Bottom Sheet */}
        <div
          className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-500 ${
            addTasksArea
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={handleOpenTasks}
            className={`absolute inset-0 ${
              darkMode ? "bg-black/40" : "bg-black/30"
            }`}
          />

          {/* Sheet */}
          <div
            className={`relative w-full max-w-xl rounded-t-2xl px-5 py-6 transform transition-all duration-500 ${
              darkMode ? "bg-stone-900 text-white" : "bg-white text-black"
            } ${addTasksArea ? "translate-y-0" : "translate-y-full"}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">Add New Task</h2>
              <button
                onClick={handleOpenTasks}
                className="text-sm opacity-70 hover:opacity-100"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              {/* Title */}
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm bg-transparent focus:ring focus:ring-stone-400"
              />

              {/* Description */}
              <textarea
                placeholder="Task description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full h-[110px] resize-none rounded-md border px-3 py-2 text-sm bg-transparent focus:ring focus:ring-stone-400"
              />

              {/* Deadline & Client */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="rounded-md border px-3 py-2 text-sm bg-transparent"
                />

                <select
                  value={assignedClient}
                  onChange={(e) => setAssignedClient(e.target.value)}
                  className="rounded-md border px-3 py-2 text-sm bg-transparent"
                >
                  <option value="client" className="bg-stone-300 text-stone-900">
                    Select Client
                  </option>
                  {clients.map((c) => (
                    <option
                      key={c.id}
                      value={c.name}
                      className="bg-stone-300 text-stone-900"
                    >
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    onChange={(e) => setTaskStatus(e.target.value)}
                  />
                  Active
                </label>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    onChange={(e) => setTaskStatus(e.target.value)}
                  />
                  Inactive
                </label>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  handleSubmit();
                  handleOpenTasks();
                }}
                className={`mt-3 w-full py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Add Task
              </button>
            </div>
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
              className={`flex justify-between items-center p-3.5 md:p-5 border-b last:border-b-0 ${
                darkMode
                  ? "hover:bg-stone-800 border-stone-700"
                  : "hover:bg-gray-50 border-gray-400"
              } transition`}
            >
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-400/90">{task.client}</p>
              </div>
              <div className="flex items-center gap-3.5">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    task.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {task.status}
                </span>
                <button
                  onClick={() => handleTaskEditArea(task)}
                  className="text-blue-600 hover:underline text-sm cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-600 hover:underline text-sm cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* overlay */}
          <div
            // onClick={() => setEditTaskArea(false)}
            className={`fixed inset-0 z-9999 bg-black/60 transition-opacity duration-300 ${
              editTaskArea ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Task Edit Drawer */}
            <div
              className={`fixed top-0 right-0 h-screen w-[420px] z-9999999 transform transition-transform duration-300 ease-in-out
  ${editTaskArea ? "translate-x-0" : "translate-x-full"}
  ${darkMode ? "bg-stone-900 text-white" : "bg-white text-stone-900"}
  shadow-2xl`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-700">
                <h2 className="text-lg font-semibold">Edit Client</h2>
                <button
                  onClick={() => setEditTaskArea(false)}
                  className="text-stone-400 hover:text-stone-200 text-xl"
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 px-5 py-6">
                {/* Name */}
                <div>
                  <h1>Esther</h1>
                  <label className="text-sm text-stone-400">Task Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-transparent border border-stone-600 focus:ring focus:ring-stone-400 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-stone-400">
                    Task Description
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full h-[110px] resize-none rounded-md border border-stone-600 px-3 py-2 text-sm bg-transparent focus:ring focus:ring-stone-400 outline-none"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="text-sm text-stone-400">Status</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Active"
                        checked={taskStatus === "Active"}
                        onChange={(e) => setTaskStatus(e.target.value)}
                      />
                      Active
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Inactive"
                        checked={taskStatus === "Inactive"}
                        onChange={(e) => setTaskStatus(e.target.value)}
                      />
                      Inactive
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 w-full px-5 py-4 border-t border-stone-700 flex justify-between">
                <button
                  onClick={handlerDeleteTaskAtEdit}
                  className="text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
                >
                  Delete Task
                </button>

                <button
                  onClick={handleUpdateTask}
                  className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    darkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;

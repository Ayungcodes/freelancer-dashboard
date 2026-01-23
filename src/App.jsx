import { Routes, Route } from "react-router";
import Clients from "./sections/Clients";
import Dashboard from "./sections/Dashboard";
import { useState, useEffect } from "react";
import Tasks from "./sections/Tasks";
import Analytics from "./sections/Analytics";
import Settings from "./sections/Settings";
import { initialClients } from ".";
import { initialTasks } from ".";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  let userName = "Gaius";
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

  // generate unique ID
  const generateId = () => Date.now();

  // tasks related states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editTaskArea, setEditTaskArea] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [assignedClient, setAssignedClient] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  // clients related states
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [editClientArea, setEditClientArea] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [addClientArea, setAddClientArea] = useState(false);
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem("clients");
    return saved ? JSON.parse(saved) : initialClients;
  });

  // tasks functionalies
  const handleSubmit = () => {
    if (!title || !desc || !deadline || !assignedClient) {
      return;
    }

    const newTask = {
      id: generateId(),
      title: title,
      desc: desc,
      status: taskStatus,
      deadline: deadline,
      client: assignedClient,
    };
    console.log(newTask);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTitle("");
    setDesc("");
    setDeadline("");
    setAssignedClient("");
  };

  const handleTaskEditArea = (task) => {
    setEditTaskArea(true);
    setSelectedTaskId(task.id);
    setTitle(task.title);
    setDesc(task.desc);
    setTaskStatus(task.status);
  };

  // delete task at edit drawer
  const handlerDeleteTaskAtEdit = () => {
    const updatedTasks = tasks.filter((task) => task.id !== selectedTaskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setEditTaskArea(false);
  };

  const handleUpdateTask = () => {
    if (!selectedTaskId || !title || !desc || !taskStatus) {
      console.log("FAILED VALIDATION");
    }
    const updatedTasks = tasks.map((task) =>
      task.id === selectedTaskId ? { ...task, title, desc, taskStatus } : task,
    );

    // console.log("UPDATED TASKS", updatedTasks);

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // cleanup
    setEditTaskArea(false);
    setSelectedTaskId(null);
    setTitle("");
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Clients functionalities
  const handleAddClient = () => {
    if (!name || !email) return;
    const newClient = {
      id: generateId(),
      name: name,
      email: email,
      status: status,
    };
    const updatedClients = [...clients, newClient];
    localStorage.setItem("clients", JSON.stringify(updatedClients));
    setClients(updatedClients);
    setName("");
    setEmail("");
  };

  const handleDeleteClient = (id) => {
    const updatedClients = clients.filter((client) => client.id !== id);

    setClients(updatedClients);

    localStorage.setItem("clients", JSON.stringify(updatedClients));
  };

  const handleOpenAddClient = () => {
    setAddClientArea((prev) => !prev);
  };

  const handleClientEditArea = (client) => {
    setEditClientArea(true);
    setSelectedClientId(client.id);
    setName(client.name);
    setEmail(client.email);
    setStatus(client.status);
  };

  // delete client at client drawer
  const handleDeleteClientAtEdit = () => {
    const updatedClients = clients.filter(
      (client) => client.id !== selectedClientId,
    );

    setClients(updatedClients);

    localStorage.setItem("clients", JSON.stringify(updatedClients));

    setEditClientArea(false);
  };

  const handleUpdateClient = () => {
    if (!selectedClientId || !name || !email) {
      console.log("FAILED VALIDATION");
      return;
    }

    const updatedClients = clients.map((client) =>
      client.id === selectedClientId
        ? { ...client, name, email, status }
        : client,
    );

    // console.log("UPDATED CLIENTS", updatedClients);

    setClients(updatedClients);
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    // cleanup
    setEditClientArea(false);
    setSelectedClientId(null);
    setName("");
    setEmail("");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              userName={userName}
              darkMode={darkMode}
              userMail={userMail}
              setDarkMode={setDarkMode}
              clients={clients}
              tasks={tasks}
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
              handleAddClient={handleAddClient}
              handleDeleteClient={handleDeleteClient}
              handleUpdateClient={handleUpdateClient}
              clients={clients}
              status={status}
              setStatus={setStatus}
              setEmail={setEmail}
              setName={setName}
              handleOpenAddClient={handleOpenAddClient}
              addClientArea={addClientArea}
              handleClientEditArea={handleClientEditArea}
              editClientArea={editClientArea}
              setEditClientArea={setEditClientArea}
              name={name}
              email={email}
              handleDeleteClientAtEdit={handleDeleteClientAtEdit}
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
              tasks={tasks}
              clients={clients}
              title={title}
              desc={desc}
              taskStatus={taskStatus}
              setTaskStatus={setTaskStatus}
              deadline={deadline}
              assignedClient={assignedClient}
              setTitle={setTitle}
              setDesc={setDesc}
              setDeadline={setDeadline}
              setAssignedClient={setAssignedClient}
              handleSubmit={handleSubmit}
              handleDeleteTask={handleDeleteTask}
              editTaskArea={editTaskArea}
              setEditTaskArea={setEditTaskArea}
              handleTaskEditArea={handleTaskEditArea}
              handleUpdateTask={handleUpdateTask}
              handlerDeleteTaskAtEdit={handlerDeleteTaskAtEdit}
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

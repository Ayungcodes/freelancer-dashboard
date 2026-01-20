const initialClients = [
  { id: 1, name: "Felix Dalung", email: "felix@example.com", status: "Active" },
  {
    id: 2,
    name: "William Ogbonna",
    email: "william@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Moses Thaddeus",
    email: "moses@yahoomail.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Chinaza Chukwuebuka",
    email: "moses@yahoomail.com",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Fadike Olabamidele",
    email: "moses@yahoomail.com",
    status: "Active",
  },
  {
    id: 6,
    name: "Badaru Bako",
    email: "moses@yahoomail.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Blast Media",
    email: "blast@yahoomail.com",
    status: "Active",
  },
];

const initialTasks = [
  {
    id: 1,
    title: "Landing page",
    client: "Mr. Dalung",
    status: "Completed",
    priority: "High",
    updatedAt: "2025-11-28T09:30:00",
  },
  {
    id: 2,
    title: "Backend API setup",
    client: "Mr. Thaddeus",
    status: "Completed",
    priority: "High",
    updatedAt: "2025-11-28T09:30:00",
  },
  {
    id: 3,
    title: "Design homepage",
    client: "Miss. Olabamidele",
    status: "Completed",
    priority: "Low",
    updatedAt: "2025-11-27T12:00:00",
  },
  {
    id: 4,
    title: "Create wireframe",
    client: "Mr. Bako",
    status: "Completed",
    priority: "High",
    updatedAt: "2025-11-26T15:00:00",
  },
  {
    id: 5,
    title: "Send proposal",
    client: "Blast Media",
    status: "In Progress",
    priority: "High",
    updatedAt: "2025-12-4T18:30:00",
  },
  {
    id: 6,
    title: "Design aboutpage",
    client: "Mrs. Chukwuebuka",
    status: "In Progress",
    priority: "Low",
    updatedAt: "2025-12-2T2:22:00",
  },
];

export { initialClients, initialTasks };

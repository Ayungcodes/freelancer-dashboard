import { useState } from "react";

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
    status: "Active",
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
    status: "Prospect",
  },
];

const ClientsList = ({ darkMode }) => {
  const [clients, setClients] = useState(initialClients);
  const [addClientArea, setAddClientArea] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = initialClients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClient = () => {
    if (!name || !email) return;
    const newClient = {
      id: Date.now(),
      name: name,
      email: email,
      status: "Active",
    };
    setClients([newClient, ...clients]);
    setName("");
    setEmail("");
  };

  const handleOpenAddClient = () => {
    setAddClientArea((prev) => !prev);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Clients</h1>
        <button
          onClick={handleOpenAddClient}
          className={`py-1 px-3 rounded-md ${
            darkMode
              ? "bg-gray-50 text-[#333333] hover:bg-gray-200"
              : "bg-[#000] text-gray-50"
          }`}
        >
          + Add Client
        </button>
        <div
          className={`fixed w-screen bottom-0 left-0 w-full ${
            darkMode ? "bg-stone-800/95" : "bg-white/95"
          } backdrop-blur-sm z-50 overflow-hidden transition-all duration-500 ease-in-out ${
            addClientArea
              ? "h-[62vh] opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 mt-4 space-y-4 flex flex-col">
            <h1 className="text-lg">Enter Client:</h1>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="py-1 px-3 border border-stone-500 rounded-md w-[70vw]"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="py-1 px-3 border border-stone-500 rounded-md w-[70vw]"
            />
            <div class="flex items-center gap-2.5">
              <input type="radio" name="type" id="active" />
              <label for="inactive" class="md:text-lg">
                Active
              </label>
            </div>
            <div class="flex items-center gap-2.5">
              <input type="radio" name="type" id="inactive" />
              <label for="inactive" class="md:text-lg">
                Inactive
              </label>
            </div>
            <button
              onClick={() => {
                handleAddClient();
                handleOpenAddClient();
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

      {/* Search / Filter */}

      <div className="flex justify-center gap-4 mb-4 mt-4">
        <input
          type="search"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-stone-500 px-3 py-1 rounded-lg flex-1"
        />
        <select className="border border-stone-500 px-3 py-1 rounded-lg text-[15px]">
          <option value="" className="text-[15px]">
            All Status
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Client table */}
      <div
        className={`shadow-sm w-full mt-8 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      >
        {/* Search Results */}
        <div className="space-y-2">
          {filteredClients.length === 0 && (
            <p className="text-neutral-500 text-sm">No tasks found.</p>
          )}

          {filteredClients.map((client) => (
            <div
              key={client.id}
              className={`flex justify-between items-center px-4 py-3 border-b border-stone-600 last:border-b-0 ${
                darkMode ? "hover:bg-stone-800" : "hover:bg-gray-50"
              } transition`}
            >
              <div>
                <p className="font-medium">{client.name}</p>
                <p className="text-sm text-gray-500">{client.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    client.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {client.status}
                </span>
                <button className="text-blue-700 hover:underline text-sm">
                  Edit
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;

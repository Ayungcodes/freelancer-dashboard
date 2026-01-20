import { useState } from "react";

const ClientsList = ({
  darkMode,
  handleAddClient,
  handleDeleteClient,
  clients,
  setStatus,
  setEmail,
  setName,
}) => {
  // search and add client area state
  const [searchTerm, setSearchTerm] = useState("");
  const [addClientArea, setAddClientArea] = useState(false);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAddClient = () => {
    setAddClientArea((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between gap-3">
        <div className="lg:w-[83%] md:w-[70vw] w-[59vw] flex items-center gap-2 border border-stone-500 rounded-lg px-3 py-1.5">
          <i className="fa-solid fa-magnifying-glass text-stone-500"></i>

          <input
            type="search"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm"
          />
        </div>

        <button
          onClick={handleOpenAddClient}
          className={`lg:w-[13vw] md:w-[20vw] w-[39vw] py-1 rounded-md ${
            darkMode
              ? "bg-gray-50 text-[#333333] hover:bg-gray-200"
              : "bg-[#000] text-gray-50"
          }`}
        >
          + Add Client
        </button>
        {/* add client pop up */}
        <div
          className={`fixed w-screen bottom-0 left-0 ${
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
              <input
                type="radio"
                name="type"
                id="active"
                value="Active"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label for="inactive" class="md:text-lg">
                Active
              </label>
            </div>
            <div class="flex items-center gap-2.5">
              <input
                type="radio"
                name="type"
                id="inactive"
                value="Inactive"
                onChange={(e) => setStatus(e.target.value)}
              />
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

      {/* Client table */}
      <div
        className={`shadow-sm w-full mt-8 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      >
        {/* Search Results */}
        <div className="">
          {filteredClients.length === 0 && (
            <p className="text-neutral-500 text-sm md:text-[17px] py-2 px-3">
              No clients found.
            </p>
          )}

          {filteredClients.map((client) => (
            <div
              key={client.id}
              className={`flex justify-between items-center px-4 py-3 md:py-5 border-b last:border-b-0 ${
                darkMode
                  ? "hover:bg-stone-800 border-stone-700"
                  : "hover:bg-gray-50 border-gray-400"
              } transition`}
            >
              <div>
                <p className="font-medium">{client.name}</p>
                <p className="text-sm text-gray-400/90">{client.email}</p>
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
                <button className="text-blue-600 hover:underline text-sm">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClient(client.id)}
                  className="text-red-600 hover:underline text-sm"
                >
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

import { useState } from "react";

const ClientsList = ({
  darkMode,
  handleAddClient,
  handleDeleteClient,
  handleUpdateClient,
  clients,
  status,
  name,
  email,
  setStatus,
  setEmail,
  setName,
  handleOpenAddClient,
  addClientArea,
  handleClientEditArea,
  editClientArea,
  setEditClientArea,
  handleDeleteClientAtEdit,
}) => {
  // search and add client area state
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients =
    clients?.filter((client) =>
      client.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    ) ?? [];

  return (
    <div>
      <div className="flex justify-between gap-3">
        <div className="w-[59vw] lg:w-[83%] md:w-[70vw] flex items-center gap-2 border border-stone-500 rounded-lg px-3 py-1.5">
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
        {/* overlay */}
        <div
          onClick={handleOpenAddClient}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
            addClientArea ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* add client drawer */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out
  ${addClientArea ? "translate-y-0" : "translate-y-full"}
  ${darkMode ? "bg-stone-900 text-white" : "bg-white text-stone-900"}
  rounded-t-2xl shadow-2xl`}
        >
          {/* header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-700">
            <h2 className="text-lg font-semibold">Add New Client</h2>
            <button
              onClick={handleOpenAddClient}
              className="text-stone-400 hover:text-stone-200 text-xl"
            >
              ×
            </button>
          </div>

          {/* body */}
          <div className="px-5 py-6 flex flex-col gap-4">
            {/* name */}
            <div>
              <label htmlFor="name" className="text-sm text-stone-400">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="mt-1 w-full px-3 py-2 rounded-md bg-transparent border border-stone-600 focus:ring focus:ring-stone-400 outline-none"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="text-sm text-stone-400">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@email.com"
                className="mt-1 w-full px-3 py-2 rounded-md bg-transparent border border-stone-600 focus:ring focus:ring-stone-400 outline-none"
              />
            </div>

            {/* status */}
            <div>
              <p className="text-sm text-stone-400 mb-2">Status</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  Active
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  Inactive
                </label>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="px-5 py-4 border-t border-stone-700 flex justify-end">
            <button
              onClick={() => {
                handleAddClient();
                handleOpenAddClient();
              }}
              className={`px-5 py-2 rounded-md text-sm font-medium ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Add Client
            </button>
          </div>
        </div>
      </div>

      {/* client table */}
      <div
        className={`shadow-sm w-full mt-8 rounded-xl overflow-hidden mx-auto ${
          darkMode ? "bg-stone-900" : "bg-white"
        }`}
      >
        {/* search results */}
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
                <button
                  onClick={() => handleClientEditArea(client)}
                  className="text-blue-600 hover:underline text-sm cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClient(client.id)}
                  className="text-red-600 hover:underline text-sm cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* overlay */}
          <div
            onClick={() => setEditClientArea(false)}
            className={`fixed inset-0 z-9999 bg-black/60 transition-opacity duration-300 ${
              editClientArea ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />

          {/* edit client area */}
          <div
            className={`fixed top-0 right-0 h-screen w-[420px] z-9999999 transform transition-transform duration-300 ease-in-out
  ${editClientArea ? "translate-x-0" : "translate-x-full"}
  ${darkMode ? "bg-stone-900 text-white" : "bg-white text-stone-900"}
  shadow-2xl`}
          >
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-700">
              <h2 className="text-lg font-semibold">Edit Client</h2>
              <button
                onClick={() => setEditClientArea(false)}
                className="text-stone-400 hover:text-stone-200 text-xl cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* body */}
            <div className="flex flex-col gap-4 px-5 py-6">
              {/* name */}
              <div>
                <label className="text-sm text-stone-400">Client Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-md bg-transparent border border-stone-600 focus:ring focus:ring-stone-400 outline-none"
                />
              </div>

              {/* email */}
              <div>
                <label className="text-sm text-stone-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 rounded-md bg-transparent border border-stone-600 focus:ring focus:ring-stone-400 outline-none"
                />
              </div>

              {/* status */}
              <div>
                <label className="text-sm text-stone-400">Status</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Active"
                      checked={status === "Active"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    Active
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Inactive"
                      checked={status === "Inactive"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    Inactive
                  </label>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="absolute bottom-0 w-full px-5 py-4 border-t border-stone-700 flex justify-between">
              <button
                onClick={handleDeleteClientAtEdit}
                className="text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
              >
                Delete Client
              </button>

              <button
                onClick={handleUpdateClient}
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
  );
};

export default ClientsList;

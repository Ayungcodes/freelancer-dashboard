import ClientsList from "../components/ClientsList";
import Navbar from "./Navbar";

const Clients = ({
  darkMode,
  userMail,
  setDarkMode,
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
  return (
    <section>
      <Navbar
        darkMode={darkMode}
        userMail={userMail}
        setDarkMode={setDarkMode}
      />
      <div className="px-2 mt-8 md:px-8 lg:px-20">
        <ClientsList
          darkMode={darkMode}
          handleAddClient={handleAddClient}
          handleDeleteClient={handleDeleteClient}
          handleUpdateClient={handleUpdateClient}
          clients={clients}
          status={status}
          name={name}
          email={email}
          setStatus={setStatus}
          setEmail={setEmail}
          setName={setName}
          handleOpenAddClient={handleOpenAddClient}
          addClientArea={addClientArea}
          handleClientEditArea={handleClientEditArea}
          editClientArea={editClientArea}
          setEditClientArea={setEditClientArea}
          handleDeleteClientAtEdit={handleDeleteClientAtEdit}
        />
      </div>
    </section>
  );
};

export default Clients;

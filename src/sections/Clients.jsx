import ClientsList from "../components/ClientsList";
import Navbar from "./Navbar";

const Clients = ({
  darkMode,
  userMail,
  setDarkMode,
  handleAddClient,
  handleDeleteClient,
  clients,
  setStatus,
  setEmail,
  setName
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
          clients={clients}
          setStatus={setStatus}
          setEmail={setEmail}
          setName={setName}
        />
      </div>
    </section>
  );
};

export default Clients;

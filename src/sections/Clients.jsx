import ClientsList from "../components/ClientsList";
import Navbar from "./Navbar";

const Clients = ({ darkMode, userMail, setDarkMode }) => {
  return (
    <section>
    <Navbar
          darkMode={darkMode}
          userMail={userMail}
          setDarkMode={setDarkMode}
        />
      <div className="px-2 mt-8">
       <ClientsList darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Clients;

// eslint-disable-next-line no-unused-vars
import Navbar from "./Navbar";

const Settings = ({ darkMode, userMail, setDarkMode }) => {
  return (
    <section>
      <Navbar
        darkMode={darkMode}
        userMail={userMail}
        setDarkMode={setDarkMode}
      />
      <div className="px-2">In build...</div>
    </section>
  );
};

export default Settings;

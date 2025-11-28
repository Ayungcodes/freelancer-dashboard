// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Tasks = ({ darkMode, userMail, setDarkMode }) => {
  return (
    <section>
      <Navbar
        darkMode={darkMode}
        userMail={userMail}
        setDarkMode={setDarkMode}
      />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="px-2">Hello Tasks!</div>
      </motion.div>
    </section>
  );
};

export default Tasks;

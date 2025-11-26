const ThemeToggle = ({ darkMode, setDarkMode }) => {
  

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

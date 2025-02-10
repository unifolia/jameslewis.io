import { createContext, useState } from "react";
const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ColorProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeObj = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeObj}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ColorProvider;

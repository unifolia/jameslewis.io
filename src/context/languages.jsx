import { createContext } from "react";

const LanguagesObject = createContext();

// eslint-disable-next-line react/prop-types
const LangProvider = ({ children }) => {
  const languages = [
    "html5",
    "css3",
    "tailwindcss",
    "javascript",
    "typescript",
    "react",
    "redux",
    "nodejs",
    "rust",
    "wasm",
  ];

  return (
    <LanguagesObject.Provider value={languages}>
      {children}
    </LanguagesObject.Provider>
  );
};

export { LanguagesObject };
export default LangProvider;

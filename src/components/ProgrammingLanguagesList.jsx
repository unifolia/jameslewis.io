import { useState } from "react";
import LanguagesList from "../hooks/LanguagesList";
import ThemeHook from "../hooks/ThemeHook";
import PropTypes from "prop-types";

const ProgrammingLanguagesList = () => {
  const programmingLanguages = LanguagesList();
  const { darkMode } = ThemeHook();

  const Language = ({ lang }) => {
    const [highlight, setHighlight] = useState(false);

    const handleHover = () => {
      setHighlight(!highlight);
    };

    return (
      <li
        className={`devicon-${lang}-${lang === "rust" ? "original" : "plain"} ${
          highlight || darkMode ? "colored" : ""
        } flex flex-col mb-8`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <span
          className={`font-mono text-sm mt-2 font-semibold ${
            darkMode ? "text-stone-100" : ""
          } `}
        >
          {lang}
        </span>
      </li>
    );
  };

  Language.propTypes = {
    lang: PropTypes.string,
  };

  return (
    <section className="w-8/10 max-w-7xl">
      <h2 className="text-4xl mb-10 pt-10">Skills</h2>
      <ul
        className={`grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-${programmingLanguages.length}`}
      >
        {programmingLanguages.map((lang, i) => (
          <Language lang={lang} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default ProgrammingLanguagesList;

import ThemeHook from "../hooks/ThemeHook";

const Nav = () => {
  const { darkMode, setDarkMode } = ThemeHook();

  const handleSwitch = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-9/10 max-w-7xl flex justify-between ">
      <ul className="flex text-xl">
        <li className="mr-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/james-lewis-aba632160/details/experience/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" href="https://jameslewis.io/resume.pdf">
            Résumé
          </a>
        </li>
      </ul>
      <button
        onClick={handleSwitch}
        className="toggle-button"
        aria-label="Dark Mode Toggle"
      ></button>
    </nav>
  );
};

export default Nav;

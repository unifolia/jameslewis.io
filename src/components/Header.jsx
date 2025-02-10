import About from "./About";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-white dark:bg-stone-900">
      <div className="flex flex-col items-center bg-stone-100 dark:bg-stone-800 pt-5 rounded-b-4xl">
        <Nav />
        <About />
      </div>
    </header>
  );
};

export default Header;

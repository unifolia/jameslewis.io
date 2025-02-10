import ThemeHook from "./hooks/ThemeHook";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Portfolio = () => {
  const { darkMode } = ThemeHook();

  document.body.className = `${darkMode ? "dark" : "regular"}`;

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Portfolio;

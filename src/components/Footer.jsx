const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <div className="max-w-7xl">
        <h2 className="text-4xl mb-5 mt-10">Contact Me</h2>
        <p className="text-xl">
          Feel free reach me at{" "}
          <a href="mailto:james@jamelewis.io?subject=You're%20Hired!">
            james@jameslewis.io
          </a>{" "}
        </p>
        <p className="mb-15 text-l">(my name @ the website you&apos;re on)</p>
      </div>
    </footer>
  );
};

export default Footer;

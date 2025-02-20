const ProjectsList = () => {
  return (
    <section className="w-8/10 mb-10 max-w-7xl">
      <h2 className="text-4xl mb-5 pt-10">Works</h2>
      <p className="text-xl mb-5">
        I mix engineering and music on occasion. I like making music software,
        and typically I build niche things for my own enjoyment, like{" "}
        <a target="_blank" href="https://jameslewis.io/metronome">
          this musical, polyrhythmic metronome
        </a>{" "}
        or{" "}
        <a target="_blank" href="https://jameslewis.io/synthesizer">
          this generative, reverb-soaked synthesizer
        </a>
        .
      </p>
      <p className="text-xl mb-5">
        Some non-musical pieces include{" "}
        <a target="_blank" href="https://jameslewis.io/github-app">
          this app that looks at trending GitHub repos
        </a>
        ,{" "}
        <a target="_blank" href="https://jameslewis.io/wurdle/">
          this modified Wordle clone
        </a>
        , and - of course -{" "}
        <a target="_blank" href="https://jameslewis.io/pac-rem/">
          a Pac-Man game
        </a>{" "}
        that features my incredibly handsome cat, Rembrandt.
      </p>
      <p className="text-xl">
        More here:{" "}
        <a target="_blank" href="https://github.com/unifolia">
          https://github.com/unifolia
        </a>
      </p>
    </section>
  );
};

export default ProjectsList;

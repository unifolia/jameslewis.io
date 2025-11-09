const ProjectsList = () => {
  return (
    <section className="w-8/10 mb-10 max-w-7xl">
      <h2 className="text-4xl mb-5 pt-10">Works</h2>
      <p className="text-xl mb-5">
        I mix engineering and music on occasion. I am an active member of the{" "}
        <a
          target="_blank"
          href="https://midi.org/ "
          className="whitespace-nowrap"
        >
          MIDI Association
        </a>{" "}
        and am the creator of the{" "}
        <a
          target="_blank"
          href="https://midi.engineering/messenger/"
          className="whitespace-nowrap"
        >
          MIDI Engineering Messenger
        </a>
        , a utility for sending MIDI CC messages to musical devices. I have
        other pieces of music software like{" "}
        <a target="_blank" href="https://jameslewis.io/metronome">
          this musical, polyrhythmic metronome
        </a>{" "}
        and{" "}
        <a target="_blank" href="https://jameslewis.io/synthesizer">
          this generative, reverb-soaked synthesizer
        </a>
        .
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

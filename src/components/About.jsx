import EmojiLoop from "./EmojiLoop";
import ThemeHook from "../hooks/ThemeHook";

const About = () => {
  const { darkMode } = ThemeHook();

  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-15 w-8/10 max-w-7xl">
      <h1 className="text-6xl/16 mb-9">
        Hello - I&apos;m James <EmojiLoop />
      </h1>
      <img
        className="me border-3 border-stone-50 dark:border-stone-900 mb-10 dark:"
        alt={
          darkMode
            ? "My fluffy black cat, Rembrandt"
            : "A devilishly handsome man"
        }
        src={
          darkMode
            ? "https://jameslewis.io/assets/cool-image.png"
            : "https://jameslewis.io/assets/image.png"
        }
        width={200}
        height={160}
      ></img>
      <h2 className="text-4xl mb-5">
        I am a Senior Software Engineer at Mozilla, working on Firefox.
      </h2>
      <div className="text-xl mb-10">
        <p className="mb-5">
          I&apos;m passionate about making the web open and accessible to
          everyone.
        </p>
        <p>Outside of work, I play a lot guitar.</p>
      </div>
    </div>
  );
};

export default About;

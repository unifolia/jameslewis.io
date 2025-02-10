import EmojiLoop from "./EmojiLoop";
import ThemeHook from "../hooks/ThemeHook";

const About = () => {
  const { darkMode } = ThemeHook();

  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-15 w-8/10 max-w-7xl">
      <h1 className="text-6xl/16 mb-9">
        Hey - I&apos;m James <EmojiLoop />
      </h1>
      <img
        className="me border-3 border-stone-50 dark:border-stone-900 mb-10"
        alt="A selfie I took in the mirror"
        src={
          darkMode
            ? "https://jameslewis.io/assets/cool-image.png"
            : "https://jameslewis.io/assets/image.png"
        }
        width={144}
        height={125}
      ></img>
      <h2 className="text-4xl mb-5">I&apos;m a front-end software engineer.</h2>
      <div className="text-xl mb-10">
        <p className="mb-5">
          I specialize in JavaScript and its various offshoots, like React,
          TypeScript and Node. I consider myself to be a strong generalist too,
          and love digging into interesting problems and technologies. More than
          anything, I Google a lot. I am also a strong proponent of web
          accessibility.
        </p>
        <p className="mb-5">
          I&apos;ve done engineering work for clients ranging from scrappy
          startups to Fortune 500 companies. The list includes AWS, Dow Jones,
          Capital One, Bell Canada, and more.
        </p>
        <p>Outside of work, I play a lot guitar.</p>
      </div>
    </div>
  );
};

export default About;

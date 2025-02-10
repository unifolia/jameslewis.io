import { useEffect, useState } from "react";
import ThemeHook from "../hooks/ThemeHook";

const EmojiLoop = () => {
  const { darkMode } = ThemeHook();

  const [emojiNum, setEmojiNum] = useState(0);
  const emojiArray = ["💻", "🎸", "🏀", "🍺"];

  useEffect(() => {
    location.hash = `${emojiArray[emojiNum]}${darkMode ? "🖤" : ""}`;

    setTimeout(() => {
      emojiNum === emojiArray.length - 1
        ? setEmojiNum(0)
        : setEmojiNum(emojiNum + 1);
    }, 2000);
  });

  return <span aria-hidden>{emojiArray[emojiNum]}</span>;
};

export default EmojiLoop;

import { useEffect } from "react";
import styles from "../Clues/Clue.module.css";
import QRScanner from "../QRScanner";

import audiofile from "../Clues/assets/fake.mp3";

type Props = {};

export const Fake = (_props: Props) => {
  useEffect(() => {
    // Audio setup
    const audio = new Audio(audiofile);
    audio.loop = true;
    audio.play().catch((error) => console.error("Audio play failed:", error));

    // Cleanup function to stop music when component unmounts
    return () => audio.pause();
  }, []);
  return (
    <div className={styles.fake}>
      <QRScanner />
    </div>
  );
};

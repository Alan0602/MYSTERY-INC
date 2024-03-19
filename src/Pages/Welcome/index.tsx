import { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { Barcode, Logo } from "../../ExportingFile";

const Welcome = () => {
  const targetDate = new Date("2024-02-14T12:59:59");
  const [gameStarted, setGameStarted] = useState(false); // State variable to track if the game has started

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date().getTime();
      const targetTime = targetDate.getTime();
      const timeDifference = targetTime - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Time has reached target date
        setGameStarted(true);
      }
    };

    const intervalId = setInterval(calculateRemainingTime, 1000);

    calculateRemainingTime();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSet}>
        <Barcode />
        <Logo />
        <p>The game will begin once the counter strikes zero!</p>
      </div>
      <div className={styles.homeFooter}>
        <div>
          <h1>{String(remainingTime.days).padStart(2, "0")}</h1>
          <p>DAYS</p>
        </div>
        <p>:</p>
        <div>
          <h1>{String(remainingTime.hours).padStart(2, "0")}</h1>
          <p>HOURS</p>
        </div>

        <div>
          <h1>{String(remainingTime.minutes).padStart(2, "0")}</h1>
          <p>MINUTES</p>
        </div>
        <p>:</p>
        <div>
          <h1>{String(remainingTime.seconds).padStart(2, "0")}</h1>
          <p>SECONDS</p>
        </div>
      </div>
      {gameStarted ? (
        <button onClick={handleClick}>START PLAYING</button>
      ) : (
        <p>START PLAYING</p>
      )}
    </div>
  );
};

export default Welcome;

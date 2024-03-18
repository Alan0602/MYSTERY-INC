import styles from "./Matches.module.css";
import heart from "../../assets/heart.png";
type Props = {};

export const MatchFound = (_props: Props) => {
  return (
    <div className={styles.WrapperMF}>
      <div></div>
      <div className={styles.ImageSet}>
        <div className={styles.ImageWrap}>
          <div className={styles.imageone}>
            <img src="https://source.unsplash.com/random" alt="" />
            <img className={styles.heart1} src={heart} alt="" />
          </div>
          <div className={styles.imagetwo}>
            <img src="https://source.unsplash.com/random" alt="" />
            <img className={styles.heart2} src={heart} alt="" />
          </div>
        </div>
        <div>
          <h2>It’s a match, Jake!</h2>
          <p>Start a conversation now with each other</p>
        </div>
      </div>
      <div className={styles.ButtonWrapper}>
        <button>Say Hello</button>
        <button
          style={{
            color: "#e94057",
            backgroundColor: "rgba(233, 64, 87, 0.1)",
          }}
        >
          Keep Swiping
        </button>
      </div>
    </div>
  );
};

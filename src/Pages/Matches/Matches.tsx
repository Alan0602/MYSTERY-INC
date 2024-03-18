import { Navbar } from "../../Components/Navbar/Navbar";
import { Crosssvg, Heartsvg, Sortsvg } from "../../assets/svg";
import styles from "./Matches.module.css";

type Props = {};

export const Matches = (_props: Props) => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <div>
            <h1>Matches</h1>
            <button>
              <Sortsvg />
            </button>
          </div>
          <p>This is a list of people who have liked you and your matches.</p>
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.bodySections}>
            <p>Today</p>
            <div className={styles.ContentWrap}>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.bodySections}>
            <p>Yesterday</p>
            <div className={styles.ContentWrap}>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bodySections}>
            <p>Yesterday</p>
            <div className={styles.ContentWrap}>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.bodySections}>
            <p>Yesterday</p>
            <div className={styles.ContentWrap}>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
              <div>
                <img src="https://source.unsplash.com/random" alt="" />
                <div>
                  <button>
                    <Crosssvg />
                  </button>
                  <button>
                    <Heartsvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Navbar />
    </>
  );
};

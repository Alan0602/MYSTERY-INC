import { Barcode, Logo } from "../../ExportingFile";
import styles from "./Landing.module.css";

type Props = {};

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Barcode />
      <Logo />
      <div className={styles.BottomWrap}>
        <p>
          Login/SignUp to
          <br />
          begin the hunt!
        </p>
        <div>
          <a
            className={styles.Decoration}
            style={{ backgroundColor: "white" }}
            href="/login"
          >
            <p>LOGIN</p>
          </a>
          <a className={styles.signupset} href="/signup">SIGN UP</a>
        </div>
      </div>
    </div>
  );
};

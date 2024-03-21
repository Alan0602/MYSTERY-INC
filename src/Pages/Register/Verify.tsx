import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { Barcode, Logo } from "../../ExportingFile";

/**
 * Generates the verification screen layout with a button to navigate to the login page.
 *
 * @return {JSX.Element} The JSX element representing the verification screen.
 */
const Verify = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.verifyStyles}>
      <div className={styles.Topset}>
        <Barcode />
        <Logo />
        <p>Final Step!</p>{" "}
      </div>
      <div className={styles.BottomSet}>
        <div>
          {" "}
          <h3>Verify your Email to start playing.</h3>
          <p>
            You will have recieved the verification mail to the Team lead's
            Email!
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Verify;

import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const Verify = () => {
	const navigate = useNavigate();
    return (
        <div className={styles.verifyWrapper}>
                <div>
                    <div>Please check your email for the verification link.</div>
                    <div>Then proceed to login</div>
                </div>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    );
};

export default Verify;

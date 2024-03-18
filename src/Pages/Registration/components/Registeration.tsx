import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabase";
import toast from "react-hot-toast";
import styles from "./index.module.css"

const Registeration = () => {
	const [data, setData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const navigate = useNavigate();

    const handleSignUp = async () => {
        let { data: res, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });
        if (error) {
            throw error.message;
        } else {
            return res;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(data).some(
            (value) => value.trim() === ""
        );
        if (isAnyFieldEmpty) {
            toast.error("Please fill out all fields.");
            return;
        }

        if (data.password !== data.passwordConfirm) {
            toast.error("Passwords do not match");
            return;
        }

        toast.promise(handleSignUp(), {
            loading: "Signing up...",
            success: () => {
                navigate("/verify");
                return <b>Signed up successfully</b>;
            },
            error: (error) => {
                return <b>{error}</b>;
            },
        });
    };
    return (
      <div className={styles.wrapper}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <input
            type="email"
            placeholder="email address"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) =>
              setData({
                ...data,
                passwordConfirm: e.target.value,
              })
            }
          />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account?&nbsp;<a href="/login"><b>Sign In</b></a>
        </p>
      </div>
    );
};

export default Registeration;

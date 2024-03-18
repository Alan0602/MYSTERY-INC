import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabase";
import toast from "react-hot-toast";
import styles from "./index.module.css";

const LoginInput = () => {
	const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSignIn = async () => {
        let { data: res, error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        if (error) {
            throw error.message;
        } else {
            localStorage.setItem("user", JSON.stringify(res.session));
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

        toast.promise(handleSignIn(), {
            loading: "Signing in...",
            success: () => {
                navigate("/details");
                return <b>Signed in successfully</b>;
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
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default LoginInput;

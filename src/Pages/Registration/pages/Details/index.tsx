import { FormEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import { supabase } from "../../../../utils/supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const [verified, setVerified] = useState(true);
    const [userId, setUserId] = useState("");
    const [data, setData] = useState({
        name: "",
        gender: "",
        dob: "",
        bio: "",
        userId: "",
    });

    // Error state and validation function
    const [validationErrors, setValidationErrors] = useState({
        name: "",
        gender: "",
        dob: "",
    });

    const validateForm = () => {
        const errors = {
            name: "",
            gender: "",
            dob: "",
        };

        if (!data.name.trim()) {
            errors.name = "Name is required";
        }

        if (!data.gender) {
            errors.gender = "Gender is required";
        }

        if (!data.dob) {
            errors.dob = "Date of birth is required";
        }

        // Optional bio can be empty

        setValidationErrors(errors);
        return data.dob && data.gender && data.name; // Return true if no errors
    };

    const fetchUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user) {
            setUserId(user?.id);
            let { data: users, error } = await supabase
                .from("users")
                .select("*")
                .eq("id", user?.id);
            if (error) {
                toast.error(error.message);
                throw error.message;
            } else if (users) {
                if (users?.length > 0) {
                    navigate("/");
                } else {
                    setVerified(false);
                }
                return users;
            }
        } else {
            toast.error("Please login first");
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validateForm()) {
            console.log("Form validation failed");
            return;
        } else {
            const { data: user, error } = await supabase
                .from("users")
                .upsert({
                    name: data.name,
                    gender: data.gender,
                    dob: data.dob,
                    bio: data.bio,
                    id: userId,
                })
                .select();
            if (error) {
                toast.error(error.message);
                throw error.message;
            } else if (user) {
                navigate("/dashboard");
            }
        }
    }

    return (
        <div className={styles.detailsWrapper}>
            {!verified ? (
                <form className={styles.detailsForm} onSubmit={handleSubmit}>
                    <div>
                        <b>Details</b>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                            className={
                                validationErrors.name ? styles.errorInput : ""
                            }
                        />
                        {validationErrors.name && (
                            <span className={styles.errorMessage}>
                                {validationErrors.name}
                            </span>
                        )}
                        <select
                            name="gender"
                            value={data.gender}
                            onChange={(e) =>
                                setData({ ...data, gender: e.target.value })
                            }
                            className={
                                validationErrors.gender ? styles.errorInput : ""
                            }
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {validationErrors.gender && (
                            <span className={styles.errorMessage}>
                                {validationErrors.gender}
                            </span>
                        )}
                        <input
                            type="date"
                            value={data.dob}
                            onChange={(e) =>
                                setData({ ...data, dob: e.target.value })
                            }
                            className={
                                validationErrors.dob ? styles.errorInput : ""
                            }
                        />
                        {validationErrors.dob && (
                            <span className={styles.errorMessage}>
                                {validationErrors.dob}
                            </span>
                        )}

                        <textarea
                            placeholder="Bio"
                            onChange={(e) =>
                                setData({ ...data, bio: e.target.value })
                            }
                        />
                        <button>Submit</button>
                    </div>
                </form>
            ) : (
                <div>Loader</div>
            )}
        </div>
    );
};

export default Details;

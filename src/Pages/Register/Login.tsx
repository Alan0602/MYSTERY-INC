import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { Barcode, Logo } from "../../ExportingFile";

type Props = {};

export const Login = (_props: Props) => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		usernameOrEmail: "",
		password: "",
		usernameOrEmailError: "",
		passwordError: "",
	});

	const validateForm = () => {
		let isValid = true;
		if (data.usernameOrEmail === "") {
			setData((prevData) => ({
				...prevData,
				usernameOrEmailError: "Please enter a username or email",
			}));
			isValid = false;
		}
		if (data.password === "") {
			setData((prevData) => ({
				...prevData,
				passwordError: "Please enter a password",
			}));
			isValid = false;
		}
		return isValid;
	};

	const handleLogin = async () => {
		let { data: res, error } = await supabase.auth.signInWithPassword({
			email: data.usernameOrEmail,
			password: data.password,
		});
		if (error) {
			throw error.message;
		} else {
			localStorage.setItem("user", JSON.stringify(res.session));
		}
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (validateForm()) {
			toast.promise(handleLogin(), {
				loading: "Signing in...",
				success: () => {
					navigate("/");
					return <b>Signed in successfully</b>;
				},
				error: (error) => {
					return <b>{error}</b>;
				},
			});
		}
	};

	return (
		<div className={styles.RegistrationWrapper}>
			<Barcode />
			<Logo />
			<p>Login To Begin The Hunt</p>
			<div className={styles.InputContainerWrapper}>
				<div>
					<div className={styles.Individuals}>
						<label htmlFor="Email">Email</label>
						<input
							type="text"
							placeholder="Enter Verified Email"
							value={data.usernameOrEmail}
							onChange={(e) =>
								setData({
									...data,
									usernameOrEmail: e.target.value,
									usernameOrEmailError: "",
								})
							}
						/>
					</div>
					{data.usernameOrEmailError && (
						<p>{data.usernameOrEmailError}</p>
					)}
					<div className={styles.Individuals}>
						<label htmlFor="Password">Password</label>
						<input
							type="password"
							placeholder="Password"
							value={data.password}
							onChange={(e) =>
								setData({
									...data,
									password: e.target.value,
									passwordError: "",
								})
							}
						/>
					</div>
					{data.passwordError && <p>{data.passwordError}</p>}

					{/* <button className={styles.forgetpassword}>
						Forget Password ?
					</button> */}
				</div>

				<button onClick={handleSubmit}>Log In</button>
			</div>
		</div>
	);
};

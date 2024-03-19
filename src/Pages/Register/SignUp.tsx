import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { Barcode, Logo } from "../../ExportingFile";
import { Femalesvg, Malesvg } from "../../assets/svg";

export const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    usernameError: "",
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    email2: "",
    email2Error: "",
    class: "",
    classError: "",
    class2: "",
    class2Error: "",
    password: "",
    passwordError: "",
    password2: "",
    password2Error: "",
  });
  const [page, setPage] = useState(0);

  const validateForm = () => {
    let isValid = true;
    if (data.username === "") {
      setData((prevData) => ({
        ...prevData,
        usernameError: "Please enter a username",
      }));
      toast.error("Please enter a username");
      isValid = false;
    }
    if (data.name === "") {
      setData((prevData) => ({
        ...prevData,
        nameError: "Please enter a name",
      }));
      toast.error("Please enter a name");
      isValid = false;
    }
    if (data.email === "") {
      setData((prevData) => ({
        ...prevData,
        emailError: "Please enter an email",
      }));
      toast.error("Please enter an email for player 1");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setData((prevData) => ({
        ...prevData,
        emailError: "Please enter a valid email",
      }));
      toast.error("Please enter a valid email for player 1");
      isValid = false;
    }
    if (data.email2 === "") {
      setData((prevData) => ({
        ...prevData,
        email2Error: "Please enter an email",
      }));
      toast.error("Please enter an email for player 2");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setData((prevData) => ({
        ...prevData,
        email2Error: "Please enter a valid email for player 2",
      }));
      toast.error("Please enter a valid email for player 2");
      isValid = false;
    }
    if (data.password === "") {
      setData((prevData) => ({
        ...prevData,
        passwordError: "Please enter a password",
      }));
      toast.error("Please enter a password");
      isValid = false;
    }
    if (data.password !== data.password2) {
      setData((prevData) => ({
        ...prevData,
        password2Error: "Passwords do not match",
      }));
      toast.error("Passwords do not match");
      isValid = false;
    }
    return isValid;
  };

  const handleRegistration = async () => {
    let { data: res, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          player1: data.username,
          player2: data.name,
          email1: data.email,
          email2: data.email2,
          class1: data.class,
          class2: data.class2,
        },
      },
    });
    if (error) {
      throw error.message;
    } else {
      localStorage.setItem("user", JSON.stringify(res.session));
      return res;
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      toast.promise(handleRegistration(), {
        loading: "Signing up...",
        success: () => {
          navigate("/verify");
          return <b>Signed up successfully</b>;
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
      {page < 1 ? <p>Register to play!</p> : <p>Complete Registration</p>}
      <div className={styles.InputContainerWrapper}>
        <div>
          {page === 0 && (
            <>
              <div className={styles.Individuals}>
                <label>Participant 1 Name</label>

                <input
                  type="text"
                  placeholder="Enter Name of first player"
                  value={data.username}
                  onChange={(e) =>
                    setData({
                      ...data,
                      username: e.target.value,
                      usernameError: "",
                    })
                  }
                  required
                />
                <Malesvg />
              </div>
              {data.usernameError && <p>{data.usernameError}</p>}
              <div className={styles.Individuals}>
                <label htmlFor="Email">Participant 1 Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                      emailError: "",
                    })
                  }
                  required
                />{" "}
                <Malesvg />
              </div>{" "}
              {data.emailError && <p>{data.emailError}</p>}
              <div className={styles.Individuals}>
                <label htmlFor="Class">Participant 1 Class</label>
                <input
                  type="text"
                  placeholder="Enter Class"
                  value={data.class}
                  onChange={(e) =>
                    setData({
                      ...data,
                      class: e.target.value,
                      classError: "",
                    })
                  }
                  required
                />
                <Malesvg />
              </div>
              <button
                className={styles.SignupNxtBtn}
                onClick={() => {
                  setPage(1);
                }}
              >
                Next
              </button>
            </>
          )}
          {page === 1 && (
            <>
              {" "}
              <div className={styles.Individuals}>
                <label>Participant 2 Name</label>
                <input
                  type="text"
                  placeholder="Enter Name of second player"
                  value={data.name}
                  onChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value,
                      nameError: "",
                    })
                  }
                  required
                />
                <Femalesvg />
              </div>
              {data.nameError && <p>{data.nameError}</p>}
              <div className={styles.Individuals}>
                <label htmlFor="Email">Participant 2 Email</label>

                <input
                  type="email"
                  placeholder="Enter Email of second player"
                  value={data.email2}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email2: e.target.value,
                      email2Error: "",
                    })
                  }
                  required
                />
                <Femalesvg />
              </div>
              {data.email2Error && <p>{data.email2Error}</p>}
              <div className={styles.Individuals}>
                <label htmlFor="Class">Participant 2 Class</label>
                <input
                  type="text"
                  placeholder="Enter Class"
                  value={data.class2}
                  onChange={(e) =>
                    setData({
                      ...data,
                      class2: e.target.value,
                      class2Error: "",
                    })
                  }
                  required
                />
                <Femalesvg />
              </div>
              {/* <button
                onClick={() => {
                  setPage(0);
                }}
              >
                Back
              </button> */}
              <button
                className={styles.SignupNxtBtn}
                onClick={() => {
                  setPage(2);
                }}
              >
                Next
              </button>
            </>
          )}

          {page === 2 && (
            <>
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
                  required
                />{" "}
              </div>
              {data.passwordError && <p>{data.passwordError}</p>}
              <div className={styles.Individuals}>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={data.password2}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password2: e.target.value,
                      password2Error: "",
                    })
                  }
                  required
                />{" "}
              </div>
              {data.password2Error && <p>{data.password2Error}</p>}
              {/* <button
                onClick={() => {
                  setPage(1);
                }}
              >
                Back
              </button> */}
              <p className={styles.subscript}>
                By clicking “Sign Up”, you agree with our{" "}
                <a href="/terms">Terms</a>.
              </p>
              <button className={styles.SignupNxtBtn} onClick={handleSubmit}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

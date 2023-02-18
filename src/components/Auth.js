import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/authSlice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      dispatch(authActions.logIn(formState.email));
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={inputChangeHandler("email")}
              value={formState.email}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={inputChangeHandler("password")}
              value={formState.password}
              type="password"
              id="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

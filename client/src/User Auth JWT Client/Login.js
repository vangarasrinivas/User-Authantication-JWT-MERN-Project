import React, { useState, useContext } from "react";
import axios from "axios";
import { store } from "./App";
import { Redirect } from "react-router";

const Login = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => setToken(res.data.token));
  };
  if (token) {
    return <Redirect to="/myprofile" />;
  }
  return (
    <div className="d-flex justify-content-center">
      <div>
        <form onSubmit={submitHandler}>
          <h3 className="text-danger">Login</h3>
          <input
            className="form-control"
            type="email"
            onChange={changeHandler}
            name="email"
            placeholder="@email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            onChange={changeHandler}
            name="password"
            placeholder="Password"
          />
          <br />
          <input className="btn btn-primary" type="submit" value="Login" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;

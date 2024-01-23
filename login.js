import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="lg">
      <div className="wrapper">
        <div className="pad">
          <h1 className="log">Login</h1>

          <input
            type="text"
            className="pass"
            placeholder="username"
            required
          ></input>
          <br />
          <br />
          <input
            type="password"
            className="pass"
            placeholder="password"
            required
          />
          <br />

          <div className="">
            <label className="c">
              <input type="checkbox" required />
              Remember Me{" "}
            </label>
            <label className="space"></label>
            <a href="#" className="f">
              {" "}
              Forget Password?
            </a>
          </div>
          <button type="submit" className="ll ">
            <Link
              to="/Home"
              style={{
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </button>
          <div className="sign">
            <p className="si">Don't have an account?</p>
            <Link to="/Signup" className="sign">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";

const Login = () => {
  //   let handleSubmit = "";
  //   let onChange = "";

  return (
    <div>
      <div className="login-form auth-form">
        <h1 className="form-label">Log In</h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <br></br>
            <input
              //   onChange={onChange}
              type="email"
              name="email"
              className="form-control"
              id="email-input"
              placeholder="Email"
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <br></br>
            <input
              //   onChange={onChange}
              type="password"
              name="password"
              className="form-control"
              id="password-input"
              placeholder="Password"
            ></input>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

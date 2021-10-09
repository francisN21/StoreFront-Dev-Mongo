import React from "react";

const SignUp = () => {
  //   let submit = "";
  //   let onChange = "";
  return (
    <div className="signup-form">
      <h1 className="form-label">Sign Up</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <br></br>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName-input"
            placeholder="First Name"
            // onChange={onChange}
          ></input>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName-input"
            placeholder="Last Name"
            // onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label>User Name</label>
          <br></br>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username-input"
            placeholder="user name"
            //   onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
            // onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            // onChange={onChange}
          ></input>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary signup">
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignUp;

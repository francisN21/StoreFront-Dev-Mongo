import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../LoginPage/styles.css";

const AuthForm = () => {
  const [form, setform] = useState(true);
  // console.log(setform);

  const login = "Login";
  const signup = "Sign Up";

  const haveAcc = "Already have an Account?";
  const noAcc = "or";

  let formText;
  let formButton;

  if (form === !(<SignUp />)) {
    formText = haveAcc;
    formButton = login;
  } else {
    formText = noAcc;
    formButton = signup;
  }
  return (
    <div>
      <div className="box auth-form">
        {form ? <Login /> : <SignUp />}

        <div>
          <p>{formText}</p>
          <button
            className="btn btn-primary sign-up"
            onClick={() => setform(!form)}
          >
            {formButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

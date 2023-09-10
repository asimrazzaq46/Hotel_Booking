import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import ButtonLoader from "../layouts/ButtonLoader";

import { useDispatch, useSelector } from "react-redux";

import {
  forgotPassword,
  clearAllErrors,
} from "../../redux/actions/userActions";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = { email };

    dispatch(forgotPassword(userData));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }

    if (error) {
      toast.error(error);
      dispatch(clearAllErrors());
    }
  }, [dispatch, message, error]);

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
          <h1 className="mb-3">Forgot Password</h1>
          <div className="form-group">
            <label htmlFor="email_field">Enter Email</label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            id="forgot_password_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={loading ? true : false}
          >
            {loading ? <ButtonLoader /> : "Send Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

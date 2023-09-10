import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import ButtonLoader from "../layouts/ButtonLoader";

import { useDispatch, useSelector } from "react-redux";

import { resetPassword, clearAllErrors } from "../../redux/actions/userActions";

const NewPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, loading, success, message } = useSelector(
    (state) => state.forgotPassword
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const passwords = { password, confirmPassword };

    dispatch(resetPassword(router.query.token, passwords));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (success) {
      router.push("/login");
    }

    if (error) {
      toast.error(error);
      dispatch(clearAllErrors());
    }
  }, [dispatch, success, message, error]);

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
          <h1 className="mb-3">New Password</h1>

          <div className="form-group">
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm_password_field">Confirm Password</label>
            <input
              type="password"
              id="confirm_password_field"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            id="new_password_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={loading ? true : false}
          >
            {loading ? <ButtonLoader /> : "Set Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;

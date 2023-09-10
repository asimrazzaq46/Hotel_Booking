import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { loadUser } from "../../redux/actions/userActions";
import { signOut } from "next-auth/react";

import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.loadedUser);

  const logoutHandler = () => {
    signOut();
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Fragment>
      <nav className="navbar row justify-content-center sticky-top">
        <div className="container">
          <div className="col-3 p-0">
            <div className="navbar-brand">
              <Link href={"/"}>
                <img
                  style={{ cursor: "pointer" }}
                  src="/images/bookit_logo.png"
                  alt="BookIT"
                />
              </Link>
            </div>
          </div>

          <div className="col-3 mt-3 mt-md-0 text-center">
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="">
                  <figure className="avatar avatar-nav">
                    <img
                      src={user.avatar && user.avatar.url}
                      alt={user && user.name}
                      className="rounded-circle"
                    />
                  </figure>
                  <span>{user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link href="/bookings/me">
                      <a className="dropdown-link">My bookings</a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/me/update">
                      <a className="dropdown-link">Profile</a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link href="/">
                      <a
                        className="dropdown-link text-danger"
                        onClick={logoutHandler}
                      >
                        Logout
                      </a>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              !loading && (
                <Link href="/login">
                  <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                    Log In
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

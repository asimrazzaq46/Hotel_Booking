import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
            <Link href='/login'>
              <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                Log In
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

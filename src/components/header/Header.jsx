import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export const Header = () => {
  const userRole = localStorage.getItem("role");
  console.log(userRole);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container headerflex text-white">
          <div className="nav">
            <ul className="nav-links text-white">
              <li className="text-white">
                <Link
                  className="text-white underline-hover-effect"
                  to="https://diamondtofu.com/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white underline-hover-effect"
                  to="https://diamondtofu.com/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-white underline-hover-effect"
                  to="https://diamondtofu.com/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-white underline-hover-effect"
                  to="https://diamondtofu.com/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-white underline-hover-effect" to="/">
                  Career
                </Link>
              </li>
              <li>
                <Link className="text-white underline-hover-effect" to="/login">
                  Login
                </Link>
              </li>
              <li>
                {userRole == 1 && (
                  <>
                    <Link
                      className="text-white underline-hover-effect"
                      to="/table"
                    >
                      Management Table
                    </Link>
                  </>
                )}
                {userRole == 2 && (
                  <>
                    <Link
                      className="text-white underline-hover-effect"
                      to="/user"
                    >
                      User Profile
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>

          <img className="logo" src="DT logo.png" alt="" />
        </div>
      </header>
    </>
  );
};

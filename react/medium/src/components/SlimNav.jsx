import smallLogo from "../image/logo-small.svg";
import { useState } from "react";
import SearchIcon from "./search-icon.jsx";
import WriteIcon from "./WriteIcon";
import { MainButton } from "./MainButton";
import { Dropdown } from "react-bootstrap";
export const SlimNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-4 slim-nav">
      <div>
        <div className="d-flex">
          <img src={smallLogo} alt="" className="me-3" />
          <form className="position-relative ">
            <input
              type="text"
              placeholder="Search medium"
              className="form-control search-input"
            />
            <button className="btn search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div>
        <ul className="d-flex align-items-center slim-nav-menu">
          <li>
            <a href="#" className="slim-nav-link">
              <WriteIcon />
              Write
            </a>
          </li>
          <li>
            <MainButton>Sign Up</MainButton>
          </li>
          <li>
            <a href="#" className="slim-nav-link">
              Sign in
            </a>
          </li>
          <li>
            <div>
              <div className="dropdown text-end">
                <a
                  onClick={toggleDropdown}
                  href
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  aria-expanded="false"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/81268891?s=200&v=4"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle  bg-white"
                  />
                </a>
                <ul
                  className={`dropdown-menu text-small end-0 ${
                    showDropdown && "show test  width-100%"
                  }`}
                >
                  <li>
                    <h2>Get Started on Medium</h2>
                  </li>
                  <li className="">
                    <MainButton>Sign Up</MainButton>
                  </li>
                  <li>
                    <MainButton variant="reverted">Sign In</MainButton>
                  </li>
                  <hr />
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

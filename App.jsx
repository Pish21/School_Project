import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const renderLoginForm = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div
            className="col-8 bg-secondary border border-2 border-dark"
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <h1 className="display-6 text-center text-black">
              Property Assessment Pro
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 bg-white border border-top-0 border-bottom-0 border-2 border-dark">
            <form onSubmit={handleLogin}>
              <div className="row">
                <div className="input-group col justify-content-center ">
                  <div className="m-5 mb-2">
                    <label
                      htmlFor="InputID"
                      className="form-label text-black fw-semibold "
                    >
                      Login ID
                    </label>
                    <input type="ID" className="form-control" id="InputID" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-group justify-content-center ">
                  <div className="mb-5 mx-5 ">
                    <label
                      htmlFor="InputPassword"
                      className="form-label text-black fw-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="InputPassword"
                    />
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto mb-5">
                <button
                  type="submit"
                  className="btn btn-primary fw-semibold font"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 bg-white border border-2 border-dark">
            <h2 className=" text-start fs-6 fw-light  ">
              Copyright © 2022 PAP. All rights reserved.
            </h2>
          </div>
        </div>
      </div>
    );
  };

  const HomePage = ({ userName, onLogout }) => {
    return (
      <div>
        <header className="d-flex justify-content-between align-items-center bg-primary text-white px-3 py-2">
          <h2 className="mb-0">{userName}</h2>
          <button className="btn btn-secondary" onClick={onLogout}>
            Logout
          </button>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://www.fashioncrossover-london.com/downloads/1550159357PAP_logo.png"
                alt="PAP Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top me-2"
              />
              Property Assessment Pro
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Search Properties
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <h1 className="display-6 text-center text-black">
            Welcome to the Home Page!
          </h1>
        </div>
        <footer className="d-flex justify-content-center align-items-center bg-primary text-white px-3 py-2 mt-5">
          <h6 className="mb-0">© 2023 PAP. All rights reserved.</h6>
        </footer>
      </div>
    );
  };

  return <>{isLoggedIn ? <HomePage /> : renderLoginForm()}</>;
}

export default App;

import React, { useState } from "react";
import AddOrganization from "./AddOrganization";
import Homepage from "./Homepage";
import Login from "./Login";
import UserList from "./UserList";

function OrganizationList() {
  const [isOrganization, setOrganization] = useState(true);
  const [isHome, setHome] = useState(false);
  const [isUser, setUser] = useState(false);
  const [isAddOrg, setAddOrg] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const moveToHome = () => {
    setHome(true);
    setOrganization(false);
    setUser(false);
    setLogin(false);
  };

  const moveToOrganization = () => {
    setOrganization(true);
    setUser(false);
    setHome(false);
  };

  const moveToUser = () => {
    setUser(true);
    setOrganization(false);
    setHome(false);
  };

  const moveToAddOrganization = () => {
    setAddOrg(true);
    setUser(false);
    setOrganization(false);
    setHome(false);
    setLogin(false);
  };

  const logOff = () => {
    setLogin(true);
    setHome(false);
    setOrganization(false);
    setUser(false);
  };

  const organizationHomePage = () => {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div
            className="col-3 bg-secondary border border-1 border-dark border-bottom-0 text-center align-self-start pt-2"
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <a
              className="navbar-brand "
              href="#Goes back to the Homepage"
              onClick={moveToHome}
            >
              <img
                src="https://i.ibb.co/P9hkZY5/mediamodifier-cropped-image.png"
                alt="logo"
                width="125px"
                height="75px"
              />
            </a>
          </div>
          <div
            className="col-9 bg-secondary border border-1 border-dark border-start-0 align-self-start"
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <div className="row align-items-center">
              <div className="col-9">
                <h1 className="display-6 text-center text-black  ">
                  Property Assessment Pro - List HOA
                </h1>
              </div>
              <div className="col-2 text-black">
                <p> Ayad Ismael </p>
              </div>
              <div className="col-1">
                <button
                  className="btn btn-primary btn-rou"
                  href="#Login Page"
                  role="button"
                  type="button"
                  style={{
                    "--bs-btn-padding-y": ".5rem",
                    "--bs-btn-padding-x": ".5rem",
                    "--bs-btn-font-size": "1rem"
                  }}
                  onClick={logOff}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
                    class="bi bi-power"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1v7h1V1h-1z" />
                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-3 bg-secondary border border-1 border-dark border-top-0 border-bottom-0 "
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <div className="row my-5">
              <span className="userRole text-black ">Assessment Response</span>
              <a href="#" className="link-dark px-5">
                List Assessment Response
              </a>
              <a
                href="#"
                className="link-dark px-5 text-nowrap"
                style={{ marginRight: "10px" }}
              >
                List Quarterly Assessment
              </a>
              <span className="userRole text-black ">AssessmentManagement</span>
              <a href="#" className="link-dark px-5 text-nowrap">
                List Assessment
              </a>
              <span className="userRole text-black ">Rank Judge</span>
              <a href="#" className="link-dark px-5 text-nowrap">
                List Judge
              </a>
              <span className="userRole text-black ">Administration</span>
              <a href="#" className="link-dark px-5 text-nowrap">
                List User
              </a>
              <a href="#" className="link-dark px-5 text-nowrap">
                List HOA
              </a>
              <a href="#" className="link-dark px-5 text-nowrap">
                List Property
              </a>
            </div>
          </div>
          <div
            className="col-9 border-end border-1 border-dark "
            style={{ " height: 50vh; margin-top": " -1.7rem;" }}
          >
            <div className="row mt-2">
              <div className="col text-center text-black fw-bold">
                ** HOA Information **
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-3 bg-secondary border border-1 border-dark border-top-0 "
            style={{ "--bs-bg-opacity": ".5" }}
          ></div>
          <div className="col-9 bg-white border border-1 border-dark border-start-0 border-bottom-1">
            <div className="bg-light">
              <button
                type="button"
                className="btn btn-primary my-2 ms-2"
                onClick={moveToAddOrganization}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-3 bg-secondary border border-1 border-dark border-top-0 "
            style={{ "--bs-bg-opacity": ".5" }}
          ></div>
          <div className="col-9 bg-white border border-1 border-dark border-start-0 border-top-0">
            <h2 className=" text-center fs-6 fw-light  ">
              Copyright Â© 2022 PAP. All rights reserved.
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isLogin && <Login />}
      {isHome && <Homepage />}
      {isOrganization && organizationHomePage()}
      {isUser && <UserList />}
      {isAddOrg && <AddOrganization />}
    </>
  );
}

export default OrganizationList;
 

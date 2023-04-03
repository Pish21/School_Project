import React, { useState } from "react";
import AddUser from "./AddUser";
import Homepage from "./Homepage";
import Login from "./Login";
import OrganizationList from "./Organization";

function UserList() {
  const [inHome, setHome] = useState(false);
  const [isUser, setUser] = useState(true);
  const [isOrganization, setOrganization] = useState(false);
  const [isAdd, setAdd] = useState(false);

  const moveToHome = () => {
    setHome(true);
    setOrganization(false);
    setUser(false);
  };

  const moveToOrganization = () => {
    setOrganization(true);
    setUser(false);
    setHome(false);
  };

  const logOff = () => {
    setHome(false);
    setOrganization(false);
    setUser(false);
  };

  const addUser = () => {
    setHome(false);
    setOrganization(false);
    setUser(false);
    setAdd(true);
  };

  const homeUser = () => {
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
                <h1
                  className="display-6 text-center text-black"
                  style={{ fontSize: "2rem" }}
                >
                  Property Assessment Pro (PAP) - List User
                </h1>
              </div>
              <div className="col-2 text-black">Ayad Ismael</div>
              <div className="col-1">
                <button
                  className="btn btn-primary btn-rou"
                  href="#Login Page"
                  role="button"
                  type="button"
                  value="button"
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
                    className="bi bi-power"
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
              <span className="userRole text-black ">#userRole</span>
              <a href="#" class="link-dark px-5">
                List User
              </a>
              <a
                href="#"
                class="link-dark px-5 text-nowrap"
                onClick={moveToOrganization}
              >
                List Organization
              </a>
            </div>
          </div>
          <div
            className="col-9 border-end border-1 border-dark "
            style={{ height: "50vh", marginTop: "-1.7rem" }}
          >
            <div class="row mt-2">
              <div className="col text-center text-black fw-bold">
                First Name
              </div>
              <div className="col text-center text-black fw-bold">
                Middle Name
              </div>
              <div className="col text-center text-black fw-bold">
                Last name
              </div>
              <div className="col text-center text-black fw-bold">Role</div>
              <div className="col text-center text-black fw-bold">Status</div>
            </div>
            <div className="row justify-content-center">** Data **</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-3 bg-secondary border border-0 border-dark border-top-0 "
            style={{ "--bs-bg-opacity": ".5" }}
          ></div>
          <div className="col-9 border border-1 border-dark border-start-0 border-bottom-1">
            <div className="bg-light">
              <button
                type="button"
                class="btn btn-primary btn-sm my-2 ms-2"
                onClick={addUser}
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
    <div>
      {isUser ? (
        homeUser()
      ) : isOrganization ? (
        <OrganizationList />
      ) : inHome ? (
        <Homepage />
      ) : isAdd ? (
        <AddUser />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default UserList;
 

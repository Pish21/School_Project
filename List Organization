import React, { useState } from "react";
import Login from "./Login";
import UserList from "./UserList";
import Homepage from "./Homepage";



function OrganizationList() {
  const [inHome, setHome] = useState(false);
  const [isUser, setUser] = useState(false);
  const [isOrganization, setOrganization] = useState(true);

  const moveBackHome = () => {
    setUser(false);
    setOrganization(false);
    setHome(true);
    
  }

  const moveToUser = () => {
    setUser(true);
  };

  // const moveToOrganization = () => {
  //   setOrganization(true);
  // };

  const logOff = () => {
    setHome(false);
    setOrganization(false);
    setUser(false)
  };

  const homeOrg = () => {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div
            className="col-3 bg-secondary border border-1 border-dark border-bottom-0 text-center align-self-start pb-5 pt-2"
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <a className="navbar-brand" href="#Goes back to the Homepage" onClick={moveBackHome}>
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
                <h1 className="display-6 text-center text-black">
                  Property Assessment Pro (PAP) - List HOA
                </h1>
              </div>
              <div className="col-2 text-black">Dave Gibson</div>
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
            className="col-3 bg-secondary border border-1 border-dark border-top-0 border-bottom-0"
            style={{ "--bs-bg-opacity": ".5" }}
          >
            <span className="userRole text-black">Assessment Response</span>
              <div className="row ">
                <a href="#" className="link-dark px-5">
                  List Assessment Response
                </a>
                <a href="#" className="link-dark px-5 text-nowrap">
                  List Quarterly Assessment
                </a>
              </div>
              <br/>
              <span className="userRole text-black">AssessmentManagement</span>
              <div className="row ">
                <a href="#" className="link-dark px-5">
                  List Assessment 
                </a>
                {/* <a href="#" className="link-dark px-5 text-nowrap">
                  List Quarterly Assessment
                </a> */}
              </div>
          </div>
          <br/>

          <div className="row">
            
            <div
              className="col-3 bg-secondary border border-1 border-dark border-top-0 border-bottom-0"
              style={{ "--bs-bg-opacity": ".5" }}
            >
              <br/>
              <span className="userRole text-black">Rank Judge</span>
              <div className="row ">
                <a href="#" className="link-dark px-5" >
                  List Judge
                </a>
                {/* <a
                  href="#"
                  className="link-dark px-5 text-nowrap"
                  onClick={moveToOrganization}
                >
                  List Organization
                </a> */}
              </div>
                <br/>
              <span className="userRole text-black">Administration</span>
              <div className="row ">
                <a href="#" className="link-dark px-5" onClick={moveToUser}>
                  List User
                </a>
                
                <a
                href="#"className="link-dark px-5 text-nowrap">
                  List HOA
                </a>
                <a
                  href="#"
                  className="link-dark px-5 text-nowrap">
                  List Property
                </a>
                
              </div>

            </div>
            <div
              className="col-9 d-inline-flex"
              style={{ height: "50vh", backgroundColor: "rgba(0,0,255,.1)" }}
            >
              ** HOA Information **
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-3 bg-secondary border border-1 border-dark border-top-0"
              style={{ "--bs-bg-opacity": ".5" }}
            ></div>
            <div className="col-9 bg-white border border-1 border-dark border-start-0">
              <h2 className="text-center fs-6 fw-light">
                Copyright © 2022 PAP. All rights reserved.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
     {isUser? <UserList />: isOrganization? homeOrg() :inHome ? <Homepage/> :<Login />}
    </div>
  );
}

export default OrganizationList;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true);
  }

  const renderLoginForm = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8 bg-secondary border border-2 border-dark" style={{'--bs-bg-opacity': '.5'}}>
            <h1 className="display-6 text-center text-black">Property Assessment Pro</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 bg-white border border-top-0 border-bottom-0 border-2 border-dark">
            <form onSubmit={handleLogin}>
              <div className="row">
                <div className="input-group col justify-content-center ">
                  <div className="m-5 mb-2">
                    <label htmlFor="InputID" className="form-label text-black fw-semibold ">Login ID</label>
                    <input type="ID" className="form-control" id="InputID" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-group justify-content-center ">
                  <div className="mb-5 mx-5 ">
                    <label htmlFor="InputPassword" className="form-label text-black fw-semibold">Password</label>
                    <input type="password" className="form-control " id="InputPassword" />
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto mb-5">
                <button type="submit" className="btn btn-primary fw-semibold font">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 bg-white border border-2 border-dark">
            <h2 className=" text-start fs-6 fw-light  ">Copyright © 2022 PAP. All rights reserved.</h2>
          </div>
        </div>
      </div>
    );
  }

  const HomePage = () => {
    return (
      <div className="container mt-5">
        <h1 className="display-6 text-center text-black">Welcome to the Home Page!</h1>
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? <HomePage /> : renderLoginForm()}
    </>
  );
}

export default App;

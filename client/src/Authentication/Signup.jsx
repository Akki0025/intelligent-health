import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const SignUpPage = () => {
  const [fname, setfname] = useState(``);
  const [lname, setlname] = useState(``);
  const [email, setemail] = useState(``);
  const [password, setpassword] = useState(``);
  const [mobile, setmobile] = useState(``);
  const [userType, setuserType] = useState(``);

  //   const saveUser = () => {
  //     fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         fname: fname,
  //         lname: lname,
  //         email: email,
  //         password: password,
  //         mobile: mobile,
  //         userType: "User",
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data, "userRegister");
  //         if (data.status == "ok") {
  //           window.location.href = "./login";
  //         } else {
  //           alert("User Already Registered");
  //           toast("User Already Registered");
  //           console.log("User Already Registered");
  //         }
  //       });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/register", {
      method: "Post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        mobile: mobile,
        userType: "User",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          window.location.href = "./login";
        } else {
          toast.error("User Already Registered");
        }
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand me-6" href="/">
            <img
              className="img-fluid rounded-circle shadow-sm"
              src="/batDoctor.png"
              alt=""
              style={{ width: "40px", height: "auto" }}
            />
            <p>MedicoMate</p>
          </a>
          <div className="collapse navbar-collapse">
            {" "}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/doctorSignup">
                  Doctor's Sign Up
                </a>
              </li>{" "}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>{" "} */}
            </ul>{" "}
          </div>{" "}
          <div className="d-none d-lg-block">
            <a className="btn fw-medium me-1" href="/login">
              Sign In
            </a>
          </div>{" "}
          <div className="d-lg-none">
            {" "}
            <button className="btn navbar-burger p-0">
              {" "}
              <svg
                className="text-primary"
                width="51"
                height="51"
                viewbox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="currentColor"
                ></rect>{" "}
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </nav>

      <section className="text-center">
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
            height: "300px",
          }}
        ></div>

        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          onChange={(event) => {
                            setfname(event.target.value);
                          }}
                          required
                        />
                        <label className="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          onChange={(event) => {
                            setlname(event.target.value);
                          }}
                          required
                        />
                        <label className="form-label" for="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      onChange={(event) => {
                        setemail(event.target.value);
                      }}
                      required
                    />
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      onChange={(event) => {
                        setpassword(event.target.value);
                      }}
                      required
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="phone"
                      id="form3Example5"
                      className="form-control"
                      onChange={(event) => {
                        setmobile(event.target.value);
                      }}
                      required
                    />
                    <label className="form-label" for="form3Example3">
                      Phone
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign Up
                  </button>

                  {/* <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <h2>Sign Up</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          defaultValue="First Name"
          onChange={(event) => {
            setfname(event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          defaultValue="Last Name"
          onChange={(event) => {
            setlname(event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          defaultValue="email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          defaultValue="Password"
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="tel"
          name="mobile"
          defaultValue="Mobile"
          onChange={(event) => {
            setmobile(event.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>User Type:</label>
        <select name="userType" required>
          <option value="">Select User Type</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          onChange=
          {(event) => {
            setuserType(event.target.value);
          }}
        </select>
      </div>
      <button type="submit" onClick={saveUser}>
        Sign Up
      </button> */}
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;

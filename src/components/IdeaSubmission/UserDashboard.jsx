// NavigationBar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserDashboard.css";

import Timer from "./Timer";
import Navbar from "../Navbar";

function UserDashboard() {
  const fileInputRef = React.createRef();
  const [ideaSubmitted, setIdeaSubmitted] = React.useState(false);
  return (
    <>
      <Navbar />
      <div
        className="containerU"
      >
        <div className="form-div"
          
        >
          <h2
            style={{
              textAlign: "center",
              color: "#F66700",
              fontFamily: "DM Serif Text",
              // marginBottom: "20px",
              // marginTop: "20px",
            }}
          >
            Idea Submission Form
          </h2>
          <form 
          // style={{ marginLeft: "40px", marginRight: "40px" }}
          >
            <div className="form-grp">
              <label for="formGroupExampleInput" className="form-label">
                Idea Title
              </label>
              <input
                type="text"
                className="form-control"
                id="ideaTitle"
                required
              />
            </div>
            {/* <br /> */}
            <div className="form-grp">
            <label for="formGroupExampleInput" className="form-label">
              Domain Name
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              required
              >
              <option value="" disabled selected>
                Select Domain
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              </div>
            {/* <br /> */}
            <div className="form-grp">
              <label for="exampleFormControlTextarea1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>

            <div className="form-grp">
              <input type="file" ref={fileInputRef} required />
            </div>
            {/* <br /> */}
            <input
              id="submitIdeabtn"
              className="btn"
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                backgroundColor: "#F66700",
                // alignItems: "right",
                width: "100%",
                textAlign: "center",
                margin: "none",
                border: 'none'
              }}
              value="Submit"
            />
          </form>
        </div>
        {/* Right Side - Time Left and Status Sections */}
        <div style={{ flex: 1, color: "white" }}>
          <Timer />
          {!ideaSubmitted ? (
            <></>
          ) : (
            <div
              style={{
                height: "43.5vh",
                backgroundColor: "#FF781699",
                margin: "20px",
                borderRadius: "20px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <h2
                style={{
                  color: "#F66700",
                  fontFamily: "DM Serif Text",
                  fontWeight: "400",
                  paddingTop: "20px",
                }}
              >
                Status
              </h2>
              <p
                style={{
                  fontSize: "30px",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  top: "15%",
                  fontFamily: "Inria Sans",
                }}
              >
                Pending Approval
              </p>
            </div>
          )}
        </div>
        :
      </div>
    </>
  );
}

export default UserDashboard;

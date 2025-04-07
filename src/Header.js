import "./resume.css";
// import logo from './pic.png';
import resume from "./file/resume.pdf"
import React from 'react';



function HEADER(props) {
  return (
    <>
      <section className="header container" id="header">
        <div className="row">
          <div className="col-8 user-details">
            <div className="name">{props.user.name}</div>
            <div className="designation">
            <i className="fa-solid fa-laptop-code"></i>
            &nbsp;{props.user.designation}</div>
            <div className="contact-details mt-2">
              <div className="phone"><i className="fa-sharp fa-solid fa-phone"></i>&nbsp;{props.user.phone}</div>
              <div className="email"><i className="fa-solid fa-envelope-circle-check"></i>&nbsp;{props.user.email}</div>
            </div>
            <div className="address mt-2"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{props.user.address}</div>
          </div>
          <div className="col-4 profile-pic">
            {/* <img src={logo} alt="profile-pic" /> */}
          </div>
        </div>
      </section>
    </>
  );
}


function DOWNLOAD_BUTTON(){
  return(
    <>
      <a href={resume} download="deepak_verma.pdf">
        <button type="button" className="btn btn-outline-danger">Download Resume</button>
      </a>
    </>
  )
}

export {HEADER,  DOWNLOAD_BUTTON};

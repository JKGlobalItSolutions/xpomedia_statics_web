import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/stylecss/Demo.css";

const DemoRequestForm = () => {
  return (<div >



   {/* Hero Section */}
   <div className="container-fluid Demo_hero mb-4 text-center py-3 pt-4">
                <div className="container">
                    <h3 className="fw-bold text-md-center text-lg-center" style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}>
                    Experience XPO Media in Action – See How It Works!
                    </h3>
                    <p className="text-secondary mx-auto pb-0" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
                    Discover how our ERP software can streamline your school’s management with a hands-on demo.
                    </p>
                </div>
            </div>









    <div className="container my-5 mt-4">


<h5 className="text-center py-5  mb-3">
          Fill out the form to schedule a demo of XPO Media ERP. Our team will
          contact you soon.
        </h5>
      <div className="card p-5  Demo shadow">
      
        <form>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis" >Full Name</label>
              <input type="text" className="form-control shadow-sm h-75 " placeholder="Enter your name" />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Email Address</label>
              <input type="email" className="form-control shadow-sm h-75" placeholder="Enter your email" />
            </div>
            <div className="col-12 col-md-6 ">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Phone Number</label>
              <input type="tel" className="form-control shadow-sm h-75" placeholder="Enter your phone number" />
            </div>
            <div className="col-12 col-md-6 ">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Organization Name</label>
              <input type="text" className="form-control shadow-sm h-75" placeholder="Enter your school or institution's name" />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Designation/Role</label>
              <select className="form-select shadow-sm h-75">
                <option>Principal</option>
                <option>Administrator</option>
                <option> IT Manager</option>
                <option>etc</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Preferred Date for Demo</label>
              <input type="date" className="form-control shadow-sm h-75" />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Preferred Time Slot</label>
              <select className="form-select shadow-sm h-75">
                <option>Select the time slot</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Mode of Demo</label>
              <select className="form-select shadow-sm h-75">
                <option>Select the demo mode</option>
                <option>Online (via Zoom/Google Meet)</option>
                <option>On-Site (For Schools & Institutions)</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label fw-medium fs-5 text-primary text-primary-emphasis">Areas of Interest</label>
            <div className="d-flex flex-wrap">
              {[
                "Student Management",
                "Attendance Tracking",
                "Fee Payment & Billing",
                "Transport Monitoring",
                "HR & Payroll Automation",
                "Reports & Analytics",
                "Other: (Specify)",
              ].map((item, index) => (
                <div className="form-check me-3" key={index}>
                  <input className="form-check-input opcation_input shadow-sm h-75" type="checkbox" id={item} />
                  <label className="form-check-label" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Write More Requirements</label>
            <textarea className="form-control shadow-sm " placeholder="Enter any specific requirements or questions " rows="3"></textarea>
          </div>
          <div className="text-center mt-4">
            <button className="btn text-white  btn-lg  fs-4 fw-medium  rounded-5 "  style={{background: "linear-gradient(180deg, #0B3D7B 0%, #1470E1 100%)"}} >Request Demo</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};



export default DemoRequestForm;

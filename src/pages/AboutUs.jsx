import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/imgs/Aboutimg/1.png"
import img2 from "../assets/imgs/Aboutimg/Group.png"
import img3 from "../assets/imgs/Aboutimg/3.png"
import light from "../assets/imgs/Aboutimg/light.png"


const AboutUs = () => {
  return (
    <div>




      {/* hero */}
      <div className="container-fluid about_hero  text-center py-3">
        <div className="container ">
          <h3 className="fw-bold " style={{ color: "rgba(11, 61, 123, 1)" }}>
            Revolutionizing Education with Smart School Management!
          </h3>
          <p className="text-secondary">
            "Simplifying school management with smart automation. <br />
            Manage academics and administration effortlessly!"
          </p>
        </div>
      </div>


      {/* School Management! */}


      <div className="container School_Management mt-5">
        <div className="text-center">
          <h2>
            <span style={{ color: "rgba(11, 61, 123, 1)" }}>Xpo Media</span> – The Future of Smart School Management!
          </h2>
        </div>
        <p className="mt-3 fs-5 lh-lg">
          Xpo Media is a powerful, cloud-based School ERP software designed to simplify, automate, and enhance the
          efficiency of school operations. From student admissions and attendance tracking to fee management, transport
          monitoring, and staff administration, our all-in-one platform provides a seamless and integrated solution for
          educational institutions. With advanced automation, secure cloud access, and real-time data insights, Xpo Media
          reduces manual workload, minimizes errors, and enhances operational efficiency, allowing schools to focus on
          delivering quality education.
        </p>
        <p className='fs-5 lh-lg'>
          Our system fosters smooth and effective communication between parents, teachers, and administrators, ensuring
          transparency and engagement in every aspect of school management. The platform enables real-time notifications,
          student progress tracking, and secure access to essential academic records, creating a connected and informed
          school community.
        </p>
        <p className='fs-5 lh-lg'>
          With robust financial management tools, Xpo Media simplifies fee collection, billing, and financial reporting,
          helping institutions maintain accurate financial records effortlessly. Additionally, our transport management
          module ensures student safety by optimizing bus routes, tracking vehicles, and providing live updates.
        </p>
        <p className='fs-5 lh-lg'>
          Designed for scalability and adaptability, Xpo Media caters to the diverse needs of schools, from small
          institutions to large educational networks. Our commitment to continuous innovation ensures that schools stay
          ahead with the latest digital solutions, making administration smarter, more secure, and completely hassle-free.
          Experience the future of school management with Xpo Media – where technology meets education to create a
          seamless, efficient, and intelligent learning environment.
        </p>
      </div>



      {/* mission */}




      <Container className="py-5 Mission ">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold">Mission</h2>
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To empower educational institutions with smart, cloud-based automation.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To simplify and streamline school management through innovative technology.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To enhance efficiency, reduce manual work, and improve overall administration.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To provide seamless communication between schools, parents, and students.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To ensure secure, data-driven decision-making for better education management.
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={img1}
              alt="Mission Target"
              className="img-fluid"
              style={{ width: "320px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Vision */}


      <Container className="py-5 Vision ">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img
              src={img2}
              alt="Mission Target"
              className="img-fluid"
              style={{ width: "320px" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">Vision</h2>
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To be the most trusted and preferred School ERP solution worldwide.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span> To revolutionize educational administration with advanced digital tools.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span>To create a future where schools operate effortlessly through automation.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span>To support institutions in achieving excellence with real-time insights and efficiency.
              </li>
              <li className="d-flex align-items-start mb-2">
                <span className="me-2"><img src={light} alt="" style={{width:"25px"}} /></span>  To continuously innovate and evolve with the changing needs of education.
              </li>
            </ul>
          </Col>

        </Row>
      </Container>




      {/* Xpo Media */}




      <Container className=" Xpo_Media my-5">
        <h2 className="text-center mb-4">
          Why Choose <span className=" fw-bold" style={{color:" rgba(11, 61, 123, 1)"}}>Xpo Media?</span>
        </h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 lh-lg">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>✨ All-in-One School Management</strong>
                <p>Manage everything from admissions to finance in one powerful platform.</p>
              </li>
              <li className="mb-3">
                <strong>✨ Cloud-Based & Secure</strong>
                <p>Access school data anytime, anywhere with top-level security and backups.</p>
              </li>
              <li className="mb-3">
                <strong>✨ Automated & Time-Saving</strong>
                <p>Reduce manual work with automated attendance, fee collection, and reporting.</p>
              </li>
              <li className="mb-3">
                <strong>✨ Seamless Communication</strong>
                <p>Keep parents, teachers, and administrators connected with real-time updates.</p>
              </li>
              <li className="mb-3">
                <strong>✨ Comprehensive Reporting & Insights</strong>
                <p>Make informed decisions with detailed analytics and reports.</p>
              </li>
              <li>
                <strong>✨ Finance & Fee Management</strong>
                <p>Simplify fee collection, billing, and accounting with automated processes.</p>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={img3}
              alt="Illustration"
              className="img-fluid"
              style={{ width: "500px" }}
            />
          </Col>
        </Row>
      </Container>





    </div>
  )
}

export default AboutUs
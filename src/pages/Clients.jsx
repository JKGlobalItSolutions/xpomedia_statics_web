import React from 'react'
import logo1 from "../assets/imgs/Clients_img/Clients-1.png"
import logo2 from "../assets/imgs/Clients_img/Clients-2.png"
import logo3 from "../assets/imgs/Clients_img/Clients-3.png"
import logo4 from "../assets/imgs/Clients_img/Clients-4.png"
import logo5 from "../assets/imgs/Clients_img/Clients-5.png"
import logo6 from "../assets/imgs/Clients_img/Clients-6.png"
import logo7 from "../assets/imgs/Clients_img/Clients-7.png"
import logo8 from "../assets/imgs/Clients_img/Clients-8.png"
import logo9 from "../assets/imgs/Clients_img/Clients-9.png"
import logo10 from "../assets/imgs/Clients_img/Clients-10.png"
import logo11 from "../assets/imgs/Clients_img/Clients-11.png"
import logo12 from "../assets/imgs/Clients_img/Clients-12.png"
import logo13 from "../assets/imgs/Clients_img/Clients-13.png"
import logo14 from "../assets/imgs/Clients_img/Clients-14.png"
import logo15 from "../assets/imgs/Clients_img/Clients-15.png"
import logo16 from "../assets/imgs/Clients_img/Clients-16.png"
import logo17 from "../assets/imgs/Clients_img/Clients-17.png"
import logo18 from "../assets/imgs/Clients_img/Clients-18.png"
import logo19 from "../assets/imgs/Clients_img/Clients-19.png"
import logo20 from "../assets/imgs/Clients_img/Clients-20.png"
import logo21 from "../assets/imgs/Clients_img/Clients-21.png"
import logo22 from "../assets/imgs/Clients_img/Clients-22.png"
import logo23 from "../assets/imgs/Clients_img/Clients-23.png"
import logo24 from "../assets/imgs/Clients_img/Clients-24.png"
import logo25 from "../assets/imgs/Clients_img/Clients-25.png"
import logo26 from "../assets/imgs/Clients_img/Clients-26.png"
import logo27 from "../assets/imgs/Clients_img/Clients-27.png"
import logo28 from "../assets/imgs/Clients_img/Clients-28.png"
import logo29 from "../assets/imgs/Clients_img/Clients-29.png"
import logo30 from "../assets/imgs/Clients_img/Clients-30.png"
import logo31 from "../assets/imgs/Clients_img/Clients-31.png"
import logo32 from "../assets/imgs/Clients_img/Clients-32.png"
import logo33 from "../assets/imgs/Clients_img/Clients-33.png"
import logo34 from "../assets/imgs/Clients_img/Clients-34.png"





  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14,, logo15, logo16, logo17, logo18, logo19, logo20,logo21, logo22,logo23,
    logo24,logo25,logo26,logo27,logo28,logo29,logo30,logo31,logo32,logo33,logo34,
  ]
  

const Clients = () => {
    return (
        <div>

{/* hero */}

            <div className="container-fluid Clients_hero mb-4 text-center py-3 pt-4">
                <div className="container">
                    <h3 className="fw-bold text-md-center text-lg-center" style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}>
                        Trusted by Leading Institutions
                    </h3>
                    <p className="text-secondary mx-auto pb-0" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
                        Empowering schools, colleges, and educational organizations with seamless ERP solutions. Join our growing network of satisfied clients and experience the power of XPO Media.

                    </p>
                </div>
            </div>


  {/* main contant */}


  <div className="container my-5">
      {/* Title */}
      <h2 className="text-center mb-4">Our Trusted Institutions</h2>

      {/* Responsive Grid Layout */}
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
        {logos.map((logo, index) => (
          <div key={index} className="col text-center">
            <img
              src={logo}
              alt={`School Logo ${index + 1}`}
              className="img-fluid p-2"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>








        </div>
    )
}

export default Clients
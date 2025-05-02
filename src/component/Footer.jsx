import React from 'react';
import img1 from '../assets/imgs/Footerimg/footer_logo.png'
import linkdin from '../assets/imgs/Footerimg/linkdin.png'
import inst from '../assets/imgs/Footerimg/inst.png'
import twailter from '../assets/imgs/Footerimg/twailter.png'
import facebook from '../assets/imgs/Footerimg/facebook.png'
import youtube from '../assets/imgs/Footerimg/youtube.png'

const Footer = () => {
  return (
    <div>




      <footer class=" bg-dark text-white py-4">
        <div class="container footer">
          <div class="row">
            <div class="col-md-3 text-center text-md-start">
              <img src={img1} alt="Xpo Media Logo" style={{ width: "135px" }} class="img-fluid mb-2  ms-lg-5" />
              <p className='mt-2 lh-lg'>Streamline and automate your school's daily academic and administrative operations with Xpo Media. Elevate efficiency, enhance productivity, and experience seamless digital school management like never before!</p>
            </div>

            <div class="col-md-3 ps-5 lh-base  my-5">
              <h5 class="text-white">Contact Information</h5>
              <p> 📍151/23, Thirumanjana Gopura
                Street, (Opp) Kamarajar Statue,
                Tiruvannamalai - 606601.</p>
              <p>📧 govindanmcas@gmail.com</p>
              <p> 📞 8220839239</p>
              <div class="d-flex  gap-2">
                <a href="#" class="text-white fs-5"><img style={{ width: "30px" }} src={linkdin} alt="" /></a>
                <a href="#" class="text-white fs-5"><img style={{ width: "30px" }} src={inst} alt="" /></a>
                <a href="#" class="text-white fs-5"><img style={{ width: "30px" }} src={twailter} alt="" /></a>
                <a href="#" class="text-white fs-5"><img style={{ width: "30px" }} src={facebook} alt="" /></a>
                <a href="#" class="text-white fs-5"><img style={{ width: "30px" }} src={youtube} alt="" /></a>
              </div>
            </div>

            <div class="col-md-3  my-lg-5  ps-5">
              <h5 class="text-white">Quick Links</h5>
              <ul class=" lh-lg ">
                <li><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">About Us</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">Features</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">Pricing</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">Contact Us</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">Blog</a></li>
                <li><a href="#" class="text-white-50 text-decoration-none">FAQs</a></li>
              </ul>
            </div>

            <div class="col-md-3 ps-sm-5  my-lg-5">
              <h5 class="text-white">Core Modules</h5>
              <ul class=" lh-lg ">
                <li>Administration</li>
                <li>Admission Management</li>
                <li>Fee Management</li>
                <li>Attendance Tracking</li>
                <li>Library Management</li>
                <li>Transport & Route Management</li>
                <li>Reports & Analytics</li>
              </ul>
            </div>
          </div>
          <p class="text-start
     border-top mt-3 pt-3">All Rights Reserved &copy; 2025 Xpo Media Since 2000</p>
        </div>
      </footer>






    </div>
  );
};

export default Footer;

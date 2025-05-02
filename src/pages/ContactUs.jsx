import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import schoolboy from '../assets/imgs/ContactUs_img/boy.png'

const ContactUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_tm3z842',
      'template_yixaegr',
      form.current,
      'PKYZH-RAbc8EDCT5b'
    )
      .then((result) => {
        console.log(result.text)
        alert("Message sent successfully!")
        form.current.reset()
      }, (error) => {
        console.log(error.text)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <div>
      {/* ...Hero Section & Contact Info... */}

      <div className="container my-4">
        <div className="row">
          {/* Form */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="form-container p-4 shadow-lg rounded-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name:</label>
                  <input type="text" className="form-control" name="user_name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" name="user_email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name="user_phone" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select className="form-select" name="user_subject">
                    <option value="">Select the purpose</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" name="message" rows="4" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="btn rounded-5 text-white fs-4 w-50" style={{ background: "linear-gradient(180deg, #0B3D7B 0%, #1470E1 100%)", border: "2px solid #0B3D7B" }}>Submit</button>
              </form>
            </div>
          </div>

          {/* Image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="image-container">
              <img src={schoolboy} alt="Person in uniform" className="img-fluid rounded schoolboy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

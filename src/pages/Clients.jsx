import React, { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/logos");

        const res = await axios.get(
          "https://xpomedia-statics-web-backend-1.onrender.com/api/logos"
        );

        setLogos(res.data);
      } catch (err) {
        console.error("Failed to fetch logos:", err);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid Clients_hero mb-4 text-center py-3 pt-4">
        <div className="container">
          <h3
            className="fw-bold text-md-center text-lg-center"
            style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}
          >
            Trusted by Leading Institutions
          </h3>
          <p
            className="text-secondary mx-auto pb-0"
            style={{ maxWidth: "800px", lineHeight: "1.6" }}
          >
            Empowering schools, colleges, and educational organizations with
            seamless ERP solutions. Join our growing network of satisfied
            clients and experience the power of XPO Media.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Trusted Institutions</h2>

        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4 bg-">
          {logos.map((logo) => (
            <div key={logo._id} className="col text-center">
              <img

                // src={`http://localhost:5000/uploads/${logo.image}`}

                src={`https://xpomedia-statics-web-backend-1.onrender.com/uploads/${logo.image}`}


                alt={logo.name}
                className="img-fluid  rounded-2"
                style={{ maxWidth: "200px", height: "200px" }}
              />
              <p className="mt-2 small fw-bold">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

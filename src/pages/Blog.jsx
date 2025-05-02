import React from "react";
import img1 from "../assets/imgs/Blog-img/cardimg1.png";
import img2 from "../assets/imgs/Blog-img/cardimg2.png";
import img3 from "../assets/imgs/Blog-img/cardimg3.png";
import img4 from "../assets/imgs/Blog-img/cardimg4.png";
import img5 from "../assets/imgs/Blog-img/cardimg5.png";
import img6 from "../assets/imgs/Blog-img/cardimg6.png";
import img7 from "../assets/imgs/Blog-img/cardimg7.png";
import img8 from "../assets/imgs/Blog-img/cardimg8.png";
import img9 from "../assets/imgs/Blog-img/cardimg9.png";

const articles = [
  {
    id: 1,
    title: "The Future of School ERP: How Automation is Transforming Education",
    description:
      "🚀 Learn how automation in school ERP reduces paperwork, improves efficiency, and enhances student management.",
    image: img1,
    link: "#",
  },
  {
    id: 2,
    title: "Admission Management Made Easy: A Complete Guide",
    description:
      "📌 Discover how digital admission processes simplify student enrollment and reduce manual errors.",
    image: img2,
    link: "#",
  },
  {
    id: 3,
    title: "The Role of Finance ERP in Educational Institutions",
    description:
      "📊 Understand how finance ERP helps institutions manage budgets, fees, and financial reports seamlessly.",
    image: img3,
    link: "#",
  },
  {
    id: 4,
    title: "Streamlining School Administration with ERP Solutions",
    description:
      "🏫 Learn how ERP software helps schools optimize operations and enhance communication.",
    image: img4,
    link: "#",
  },
  {
    id: 5,
    title: "Enhancing Student Performance Tracking with AI-Powered ERP",
    description:
      "📈 Discover how AI-driven ERP systems provide insights to boost student outcomes.",
    image: img5,
    link: "#",
  },
  {
    id: 6,
    title: "Why Data Security is Essential in School Management Software",
    description:
      "🔒 Learn the importance of data protection in ERP solutions and best practices.",
    image: img6,
    link: "#",
  },
  {
    id: 7,
    title: "Automating Attendance Management with ERP Systems",
    description:
      "📝 Explore how digital attendance tracking improves efficiency and reduces errors.",
    image: img7,
    link: "#",
  },
  {
    id: 8,
    title: "Financial Planning for Schools: How ERP Can Help",
    description:
      "💰 Discover how financial ERP tools support budgeting and expense tracking.",
    image: img8,
    link: "#",
  },
  {
    id: 9,
    title: "Cloud-Based ERP: The Future of School Management",
    description:
      "☁️ Learn why cloud solutions are revolutionizing school administration.",
    image: img9,
    link: "#",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid Blog_hero text-center py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h3 className="fw-bold" style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}>
            XPO Media <i className="text-dark">Insights – Stay Ahead with Smart ERP Solutions</i>
          </h3>
          <p className="text-secondary mx-auto" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
            Explore the latest trends, tips, and innovations in School & Finance ERP Management.
          </p>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="container my-5">
        <div className="row g-4">
          {articles.map((article) => (
            <div key={article.id} className="col-12 col-sm-6 col-md-4 d-flex">
              <div className="card h-100 w-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={article.image}
                  className="card-img-top p-3 rounded-4"
                  alt={article.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{article.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">{article.description}</p>
                  <a href={article.link }  style={{ color: "rgba(11, 61, 123, 1)"}} className="fw-bold  text-end text-decoration-none mt-auto" >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

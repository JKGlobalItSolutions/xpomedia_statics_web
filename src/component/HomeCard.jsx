  "use client"

  import { useState, useEffect } from "react"
  import AOS from "aos";


  import Administration1 from "../assets/imgs/Homeimg/cards_img/1.png"
  import Administration2 from "../assets/imgs/Homeimg/cards_img/2.png"
  import Administration3 from "../assets/imgs/Homeimg/cards_img/3.png"
  import Administration4 from "../assets/imgs/Homeimg/cards_img/4.png"
  import Administration5 from "../assets/imgs/Homeimg/cards_img/5.png"
  import Administration6 from "../assets/imgs/Homeimg/cards_img/6.png"
  import Administration7 from "../assets/imgs/Homeimg/cards_img/7.png"


  import Admission1 from "../assets/imgs/Homeimg/cards_img/8.png"
  import Admission2 from "../assets/imgs/Homeimg/cards_img/9.png"
  import Admission3 from "../assets/imgs/Homeimg/cards_img/10.png"
  import Admission4 from "../assets/imgs/Homeimg/cards_img/11.png"
  import Admission5 from "../assets/imgs/Homeimg/cards_img/12.png"

  import Transaction1 from "../assets/imgs/Homeimg/cards_img/13.png"
  import Transaction2 from "../assets/imgs/Homeimg/cards_img/14.png"
  import Transaction3 from "../assets/imgs/Homeimg/cards_img/15.png"
  import Transaction4 from "../assets/imgs/Homeimg/cards_img/16.png"
  import Transaction5 from "../assets/imgs/Homeimg/cards_img/17.png"
  import Transaction6 from "../assets/imgs/Homeimg/cards_img/18.png"

  import Transport1 from "../assets/imgs/Homeimg/cards_img/19.png"
  import Transport2 from "../assets/imgs/Homeimg/cards_img/20.png"
  import Transport3 from "../assets/imgs/Homeimg/cards_img/21.png"
  import Transport4 from "../assets/imgs/Homeimg/cards_img/22.png"

  import Collection1 from "../assets/imgs/Homeimg/cards_img/23.png"
  import Collection2 from "../assets/imgs/Homeimg/cards_img/24.png"
  import Collection3 from "../assets/imgs/Homeimg/cards_img/25.png"
  import Collection4 from "../assets/imgs/Homeimg/cards_img/26.png"
  import Collection5 from "../assets/imgs/Homeimg/cards_img/27.png"
  import Collection6 from "../assets/imgs/Homeimg/cards_img/28.png"





  const IndexCard = () => {
    // Data organized by sections, each with at least 5 cards
    const sectionData = {
      Administration: [
        {
          id: 1,
          icon: Administration1,
          title: "Standard / Course Setup",
          description: "Easily configure class standards, sections, and academic structures to streamline student management.",
        },
        {
          id: 2,
          icon: Administration2,
          title: "Fee Head",
          description: "Effortlessly set up and manage fee categories, structures, and payment schedules with complete transparency.",
        },
        {
          id: 3,
          icon: Administration3,
          title: "Subjects & Courses",
          description:
            "Effortlessly manage subjects and courses with structured categorization for a seamless academic experience.",
        },
        {
          id: 4,
          icon:Administration4,
          title: "Community & Caste",
          description: "Maintain and manage community and caste details for streamlined student categorization and reporting.",
        },
        {
          id: 5,
          icon:Administration5,
          title: "Parents Information",
          description: "Keep track of parents' details, contact information,relationships for effective communication & student management.",
        },
        {
          id: 6,
          icon: Administration6,
          title: "Staff Information",
          description: "Manage staff details, roles, and contact information seamlessly for smooth school operations.",
        },
        {
          id: 7,
          icon: Administration7,
          title: "Library Head",
          description:"Efficiently manage books, categories, and borrowing records for a well-organized library system.",
        },
      ],
      Admission: [
        {
          id: 1,
          icon: Admission1,
          title: "Admission Created",
          description:
            "Simplify student admissions with an easy-to-use process for quick enrollment and data management.",
        },
        {
          id: 2,
          icon: Admission2,
          title: "Barcode Design",
          description: "Generate, manage, and scan barcodes for seamless inventory tracking and identification.",
        },
        {
          id: 3,
          icon: Admission3,
          title: "Overall Student Report",
          description: "Get real-time insights on student performance, attendance, and enrollment trends in one place.",
        },
        {
          id: 4,
          icon: Admission4,
          title: "Transfer Certificate",
          description:  "Easily generate, manage, and issue transfer certificates with seamless record tracking.",
        },
        {
          id: 5,
          icon: Admission5,
          title: "Fee Setup & Reducing",
          description:"Customize fee structures, apply discounts, and manage student payments efficiently.",
        },
      ],
      Transaction: [
        {
          id: 1,
          icon: Transaction1,
          title: "Billing Entry",
          description:
            "Simplify billing processes with accurate invoice generation and seamless payment tracking.",
        },
        {
          id: 2,
          icon: Transaction2,
          title: "Payment Entry",
          description: "Record and track student payments effortlessly with real-time transaction updates.",
        },
        {
          id: 3,
          icon:Transaction3,
          title: "Receipt Entry",
          description: "Generate and manage payment receipts with accurate records and seamless tracking.",
        },
        {
          id: 4,
          icon: Transaction4,
          title: "Attendance Entry",
          description: "Mark and track student and staff attendance with real-time updates and automated records.",
        },
        {
          id: 5,
          icon: Transaction5,
          title: "Book Distribution",
          description: "Efficiently manage and track book distribution to students and staff with real-time records.",
        },
        {
          id: 6,
          icon: Transaction6,
          title: "Supplier Payment Entry",
          description: "Streamline supplier payments with accurate tracking and seamless transaction management.",
        },
      ],
      Transport: [
        {
          id: 1,
          icon: Transport1,
          title: "Bus/Van Fee Head",
          description:
          "Easily manage and track transportation fees with automated billing and real-time payment updates.",
        },
        {
          id: 2,
          icon:Transport2,
          title: "Bus Route Details",
          description: "Plan and track bus routes efficiently with real-time updates and stop-wise details.",
        },
        {
          id: 3,
          icon:Transport3,
          title: "Bus Fee Reports",
          description: "Get detailed insights on bus fee collections, pending payments, and transaction history in one place.",
        },
        {
          id: 4,
          icon: Transport4,
          title: "Placewise Report",
          description:" Analyze and track fee collections, student distribution, and transport data by location.",
        },
        {
          id: 5,
          icon: "/placeholder.svg",
          title: "Attendance Tracking",
          description: "Track student transport usage and attendance for safety and management purposes.",
        },
      ],
      Collection: [
        {
          id: 1,
          icon: Collection1,
          title: "Tuition Fee",
          description: "Manage and track tuition fee collections with automated billing and real-time payment updates.",
        },
        {
          id: 2,
          icon:Collection2,
          title: "Miscellaneous Fee",
          description: "Easily manage and track additional school expenses with a transparent and organized fee structure.",
        },
        {
          id: 3,
          icon:Collection3,
          title: "Concession Account",
          description:"Manage and track student fee concessions with automated calculations & transparent records.",
        },
        {
          id: 4,
          icon:Collection4,
          title: "Billwise Detail",
          description: "Track and manage all bills efficiently with a detailed breakdown of payments and outstanding dues.",
        },
        {
          id: 5,
          icon:Collection5,
          title: "Receipt Details",
          description: "Keep track of all receipts with organized records of payments received and pending amounts."  ,
        },
        {
          id: 6,
          icon:Collection6,
          title: "Routewise Balance",
          description:"Monitor outstanding balances and payments across different transport routes with real-time insights.",
        },
      ],
      Payment: [
        {
          id: 1,
          icon: "/placeholder.svg",
          title: "Online Payments",
          description: "Enable secure online payment options for parents to pay fees through multiple channels.",
        },
        {
          id: 2,
          icon: "/placeholder.svg",
          title: "Payment Scheduling",
          description: "Set up installment plans and scheduled payments for flexible fee management.",
        },
        {
          id: 3,
          icon: "/placeholder.svg",
          title: "Transaction History",
          description: "Maintain detailed transaction records with payment status and verification details.",
        },
        {
          id: 4,
          icon: "/placeholder.svg",
          title: "Refund Processing",
          description: "Manage refund requests and process approved refunds efficiently with proper documentation.",
        },
        {
          id: 5,
          icon: "/placeholder.svg",
          title: "Payment Analytics",
          description: "Analyze payment patterns and trends to improve financial planning and forecasting.",
        },
      ],
      Reports: [
        {
          id: 1,
          icon: "/placeholder.svg",
          title: "Reports & Analytics",
          description: "Generate comprehensive reports to gain insights into various aspects of school management.",
        },
        {
          id: 2,
          icon: "/placeholder.svg",
          title: "Student Reports",
          description: "Create detailed student performance, attendance, and behavior reports for parents and staff.",
        },
        {
          id: 3,
          icon: "/placeholder.svg",
          title: "Financial Summaries",
          description: "Generate financial summaries and statements for accounting and auditing purposes.",
        },
        {
          id: 4,
          icon: "/placeholder.svg",
          title: "Staff Reports",
          description: "Analyze staff performance, attendance, and workload distribution for better management.",
        },
        {
          id: 5,
          icon: "/placeholder.svg",
          title: "Custom Reports",
          description: "Create customized reports based on specific requirements and parameters for detailed analysis.",
        },
      ],
    }

    const [activeSection, setActiveSection] = useState("Administration")
    const [startIndex, setStartIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    const currentSectionCards = sectionData[activeSection] || []
    const visibleCards = isMobile ? currentSectionCards : currentSectionCards.slice(startIndex, startIndex + 4)

    const handleNext = () => {
      if (startIndex + 4 < currentSectionCards.length) {
        setStartIndex(startIndex + 1)
      }
    }

    const handlePrevious = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1)
      }
    }

    const handleSectionClick = (section) => {
      setActiveSection(section)
      setStartIndex(0)
    }

    const primaryColor = "#0B3D7B"
    const secondaryColor = "#1470E1"

    return (
      <div className="position-relative">
        {/* Header Section */}
        <div className="container-fluid p-4">
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: primaryColor }}>
              All-in-One Smart Dashboard for Seamless School Management!
            </h1>
            <p className="text-muted mt-2">
              "Effortlessly manage everything—from administration to finance, transport
              <br />
              and reports—all in one intuitive, real-time dashboard."
            </p>
          </div>

          {/* Navigation Buttons */}
          <div
            className="d-flex justify-content-center flex-wrap gap-2 mb-4"
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            {Object.keys(sectionData).map((section) => (
              <button
                key={section}
                className={`btn rounded-pill px-4 py-2`}
                style={{
                  backgroundColor: activeSection === section ? primaryColor : "#A0A0A0",
                  border: "none",
                  minWidth: "120px",
                  color: "white",
                }}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="container position-relative">
          <div 
            className={`${isMobile ? "d-flex flex-nowrap overflow-auto" : "row g-4"}`}
            
            style={isMobile ? { scrollSnapType: "x mandatory" } : {}}
          >
            {visibleCards.map((card) => (
              <div
      
                key={card.id}
                className={isMobile ? "col-12 px-2 mb-4" : "col-md-6 col-lg-3"}
                style={isMobile ? { flexShrink: 0, scrollSnapAlign: "start", minWidth: "100%" } : {}}
              >
                <div
                  className="card h-100 shadow-sm"
                  style={{ backgroundColor: "#EFF6FF", borderRadius: "10px", border: "none" }}
                >
                  <div  className="card-body text-center p-4">
                    <div className="mb-3 d-flex justify-content-center">
                      <img
                        src={card.icon || "/placeholder.svg"}
                        alt={card.title}
                        style={{ height: "50px", width: "auto", color: primaryColor }}
                      />
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: primaryColor }}>
                      {card.title}
                    </h5>
                    <p className="card-text text-muted mb-4">"{card.description}"</p>
                    <div className="d-flex justify-content-end">
                      <a href="#" className="text-decoration-none" style={{ color: secondaryColor }}>
                        See More <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Outside container, aligned with cards */}
        {!isMobile && (
          <>
            <button
              className="position-absolute btn rounded-circle z-3"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: primaryColor,
                border: "none",
                left: "calc(50% - 50vw + 30px)",
                top: "calc(50% + 80px)",
                transform: "translateY(-50%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <span>&lt;</span>
            </button>

            <button
              className="position-absolute btn rounded-circle z-3"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: primaryColor,
                border: "none",
                right: "calc(50% - 50vw + 30px)",
                top: "calc(50% + 80px)",
                transform: "translateY(-50%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              onClick={handleNext}
              disabled={startIndex + 4 >= currentSectionCards.length}
            >
              <span>&gt;</span>
            </button>
          </>
        )}
      </div>
    )
  }

  export default IndexCard


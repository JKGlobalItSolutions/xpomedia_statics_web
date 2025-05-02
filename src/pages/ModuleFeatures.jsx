import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import img1 from "../assets/imgs/ModuleFeaturesimg/star-icon.png";

const modules = ["Administration", "Admission", "Transaction", "Transport", "Collection", "Payment", "Reports"];

const moduleDetails = {
    Administration: {
        title: "Administration Module",
        description: "Effortless Management for Institutional Excellence",
        para: "The Administration Module in XPO Media ERP is designed to simplify and streamline educational institution management. From course structuring to staff and fee management, this module ensures seamless operations, reducing administrative burdens and enhancing efficiency.",
        features: [
            { title: "Standard/Course Setup", para: "The Standard/Course Setup feature allows institutions to structure their academic framework efficiently. Administrators can define academic standards, configure courses, and customize curricula to meet educational requirements. This ensures a well-organized learning system, enabling institutions to provide students with structured and streamlined education pathways.", points: ["Define and configure academic courses and standards", "Customize curricula to match institutional requirements", "Assign course heads and manage academic structure efficiently", "Ensure smooth student enrollment and course allocation"] },

        ],
        paragarph: [
            { title: "Fee Head", para: "Managing institutional finances becomes effortless with the Fee Head Setup feature. It allows administrators to define and categorize various fee components, such as tuition fees, examination fees, and other miscellaneous charges. This structured approach ensures transparency, accuracy, and smooth financial transactions, reducing errors and improving fee collection efficiency.", points: ["Categorize and define tuition, examination, and other fees", "Automate fee collection and streamline transactions", "Ensure transparency and accuracy in financial records", "Generate detailed fee reports for analysis and audits"] },

            { title: "Subject & Course Management", para: "The Subject & Course Management feature simplifies academic organization by enabling institutions to define and categorize subjects under specific courses. With a well-structured subject hierarchy, institutions can assign faculty, set prerequisites, and ensure a seamless learning experience for students while maintaining curriculum integrity.", points: ["Organize subjects under specific courses for structured learning", "Assign subject heads and faculty for curriculum management", "Define prerequisites and subject dependencies", "Maintain academic consistency and improve learning outcomes"] },

            { title: "Community & Caste Setup", para: "To maintain student demographic records and comply with institutional or government regulations, the Community & Caste Setup feature allows administrators to categorize students based on their community or caste background. This data helps in scholarships, reservations, and demographic analysis, ensuring inclusivity and proper student support.", points: ["Record student demographic details for regulatory compliance", "Manage reservations and scholarship eligibility", "Ensure inclusivity and proper student support", "Generate reports for demographic analysis"] },

            { title: "Parent Information Management", para: "Keeping accurate records of student guardians is essential for effective communication. The Parent Information Management feature enables institutions to store and update parent occupation details, contact information, and other relevant data. This facilitates better engagement, enhances record-keeping, and supports decision-making regarding student welfare and financial aid.", points: ["Store and update parent occupation and contact details", "Enhance communication between institutions and guardians", "Maintain accurate records for student support and financial aid", "Ensure better engagement and transparency in parent interactions"] },

            { title: "Staff Information Management", para: "A well-organized workforce is crucial for institutional success. The Staff Information Management feature helps administrators maintain detailed records of faculty and administrative staff, including their roles, designations, and contact details. This ensures efficient workforce management, easy retrieval of information, and smooth internal operations.", points: ["Maintain faculty and administrative staff records", "Assign roles and responsibilities for efficient management   ", "Track staff performance and attendance", "Ensure smooth internal communication and coordination"] },

            { title: "Library Head Management", para: "The Library Head Management feature streamlines library operations by allowing institutions to maintain a structured record of library heads, book inventory, and member allocations. It ensures efficient book tracking, user management, and smooth library administration, enhancing the learning resources available to students and faculty.", points: ["Manage book inventory and track issued/returned books", "Assign library heads and streamline library operations", "Ensure easy access to learning resources for students and faculty", "Maintain an organized and efficient library system"] },
        ]
    },

    Admission: {
        title: "Admission Module",
        description: "Simplified Enrollment for a Seamless Academic Journey",
        para: "The Admission Module in XPO Media ERP streamlines the entire student enrollment process, ensuring a hassle-free experience for both administrators and applicants. From application submission to document verification and seat allocation, this module automates and organizes admissions efficiently, reducing manual work and enhancing accuracy.",
        features: [
            {
                title: "Admission Create",
                para: "The Admission Create feature in XPO Media ERP simplifies and accelerates the student admission process by automating application handling, document verification, and seat allocation. It eliminates manual errors and ensures a smooth onboarding experience for both students and administrators.",
                points: [
                    "Streamline student registration with an easy-to-use interface",
                    "Automate document collection and verification",
                    "Manage seat allocation and admission approvals effortlessly",
                    "Enhance accuracy and reduce administrative workload"]
            }
        ],
        paragarph: [
            {
                title: "Barcode Design",
                para: "The Barcode Design feature enables institutions to generate unique barcodes for students, staff, and library assets. This ensures quick identification, secure access, and seamless tracking within the institution.",
                points: [
                    "Generate unique barcodes for students and staff identification",
                    "Improve security with barcode-enabled access control",
                    "Enhance library and asset tracking for better resource management",
                    " Reduce manual errors and streamline institutional operations"]
            },
            {
                title: "Overall Student Report",
                para: "The Overall Student Report feature provides administrators with a 360-degree view of student performance, attendance, and academic progress. It enables data-driven decisions to improve institutional effectiveness.    ",
                points: [
                    "Automate transfer certificate issuance and approval",
                    "Maintain accurate records of student transfers ",
                    "Reduce paperwork and administrative workload",
                    "Ensure compliance with institutional and regulatory standards"]
            },
            {
                title: "Transfer Certificate Management",
                para: "The Overall Student Report feature provides administrators with a 360-degree view of student performance, attendance, and academic progress. It enables data-driven decisions to improve institutional effectiveness.",
                points: [
                    "Generate detailed reports on student performance and progress",
                    "Track attendance, grades, and behavioral records in one place",
                    "Analyze data for personalized student support and improvements",
                    " Improve institutional decision-making with real-time insights"]
            },
            {
                title: "   Fee Setup & Reducing",
                para: "The Fee Setup & Reducing feature allows institutions to configure fee structures, manage discounts, and automate payment processes, ensuring hassle-free financial operations.",
                points: [
                    "Define and customize fee categories for different programs",
                    "Automate fee collection and track pending payments",
                    "Apply discounts, scholarships, and exemptions effortlessly",
                    "Enhance financial transparency and reduce manual errors"]
            },

        ]
    },
    Transaction: {
        title: "Transaction Management",
        description: "Seamless Financial Transactions for Institutional Efficiency",
        para: "The Transaction Management feature in XPO Media ERP ensures smooth handling of all financial transactions, from student fees to vendor payments. It provides a centralized platform for tracking, managing, and reconciling transactions, ensuring accuracy and transparency in financial operations.",
        features: [
            {
                title: "Billing Entry",
                para: "The Billing Entry feature in XPO Media ERP simplifies the process of generating and managing invoices for various institutional services. It ensures accurate billing, reduces manual errors, and provides transparency in financial transactions.",
                points: [
                    "Generate and manage student fee invoices effortlessly",
                    "Automate billing for various institutional services",
                    "Track outstanding dues and payment status in real-time",
                    "Enhance financial accuracy and reduce manual workload"
                ]
            }
        ],
        paragarph: [
            {
                title: "Payment Entry   ",
                para: "The Payment Entry feature enables institutions to efficiently record and manage payments received from students, parents, or other sources. It ensures real-time tracking and proper allocation of funds.",
                points: [
                    "Record and track all incoming payments accurately",
                    "Automate fee reconciliation and update student accounts",
                    "Manage different payment modes, including online and offline",
                    " Ensure transparency and minimize financial discrepancies"]
            },
            {
                title: "Receipt Entry",
                para: "The Payment Entry feature enables institutions to efficiently record and manage payments received from students, parents, or other sources. It ensures real-time tracking and proper allocation of funds.      ",
                points: [
                    "Generate digital and printed receipts instantlyl",
                    "Maintain a secure record of all transactions ",
                    "Reduce paperwork and enhance financial transparency",
                    "Simplify reconciliation and auditing processes"]
            },
            {
                title: "Attendance Entry",
                para: "The Attendance Entry feature helps institutions maintain accurate student and staff attendance records. It automates tracking, reducing manual errors and ensuring efficient management.",
                points: [
                    "Record and manage student and staff attendance digitally",
                    "Automate attendance tracking with biometric or RFID integration",
                    "Generate attendance reports for analysis and decision-making",
                    " Improve punctuality and reduce manual effort"]
            },
            {
                title: "   Book Distribution",
                para: "The Book Distribution feature ensures smooth allocation and tracking of books issued to students and staff. It helps institutions manage library resources effectively.",
                points: [
                    "Track book issuance and returns efficiently",
                    "Reduce loss of books with automated records    ",
                    "Set due dates and send reminders for timely returns",
                    "Ensure proper inventory management in the library"]
            },
            {
                title: "  Supplier Payment Entry",
                para: "The Supplier Payment Entry feature allows institutions to manage and track payments made to vendors and suppliers. It ensures proper record-keeping and smooth financial transactions.",
                points: [
                    "Record and monitor supplier payments with accuracy",
                    "Automate invoice matching and payment processing    ",
                    "Maintain vendor-wise payment history for easy reference",
                    "Ensure transparency and timely payments to avoid disruptions"]
            },

        ]
    },
    Transport: {
        title: "Transport Management",
        description: "Safe and Efficient Transportation for Students and Staff",
        para: "The Transport Management feature in XPO Media ERP ensures seamless planning and monitoring of institutional transportation. It automates route mapping, vehicle tracking, and schedule management, enhancing safety and efficiency. This feature minimizes manual effort while ensuring timely and secure commutes for students and staff.",
        features: [
            {
                title: "Bus/Van Fee Head",
                para: "The Billing Entry feature in XPO Media ERP simplifies the process of generating and managing invoices for various institutional services. It ensures accurate billing, reduces manual errors, and provides transparency in financial transactions.",
                points: [
                    "Define and customize transportation fee structures",
                    "Automate fee calculation based on route and distance",
                    "Track pending and paid transportation fees in real-time",
                    "Ensure seamless integration with overall fee management"
                ]
            }
        ],
        paragarph: [
            {
                title: "Bus Route Details  ",
                para: "The Bus Route Details feature allows institutions to configure and manage transportation routes effectively. It helps in mapping safe and optimized routes for student pick-up and drop-off, ensuring convenience and punctuality.",
                points: [
                    "Define and manage bus routes with multiple stops",
                    "Assign vehicles and drivers to specific routes",
                    "Optimize routes for efficiency and fuel management",
                    "Ensure student safety with well-planned transport schedules"]
            },
            {
                title: "Bus Fee Reports",
                para: "The Bus Fee Reports feature provides detailed financial reports related to transportation fee payments. It enables administrators to track collections, pending payments, and overall revenue generated from transport services.  ",
                points: [
                    "Generate reports on paid and outstanding transportation fees",
                    "Monitor route-wise and student-wise payment statuses ",
                    "Ensure financial transparency and accountability",
                    "Simplify auditing and financial planning for transport management"]
            },
            {
                title: "Placewise Report",
                para: "The Placewise Report feature helps institutions analyze student distribution based on geographic locations. It assists in route optimization, transportation planning, and efficient service allocation.",
                points: [
                    "Categorize students based on pick-up and drop locations",
                    "Optimize bus routes for time and cost efficiency",
                    "Analyze student density in different areas for better planning",
                    " Enhance decision-making with real-time location-based data"]
            },


        ]
    },
    Collection: {
        title: "Collection Management",
        description: "Streamlined Fee Collection for Hassle-Free Transactions",
        para: "The Collection Management feature in XPO Media ERP ensures smooth handling of all institutional payments, including tuition fees, transport fees, and other charges. It provides real-time tracking, automated receipts, and detailed reports to enhance financial transparency and efficiency.",
        features: [
            {
                title: "Tuition Fee",
                para: "The Tuition Fee feature in XPO Media ERP ensures accurate management of academic fees, allowing institutions to automate fee collection, track payments, and generate real-time reports. It eliminates manual errors and enhances financial efficiency.",
                points: [
                    "Define and manage tuition fee structures for different courses",
                    "Automate payment tracking and reminders for due fees",
                    "Generate real-time reports on collected and pending fees",
                    "Ensure seamless integration with overall financial management"
                ]
            }
        ],
        paragarph: [
            {
                title: "Miscellaneous Fee  ",
                para: "The Miscellaneous Fee feature enables institutions to manage non-tuition fees, such as extracurricular activity charges, lab fees, and examination fees. It ensures transparency and organized financial records.",
                points: [
                    "Track and manage all non-tuition-related fees",
                    "Customize fee categories for different institutional services",
                    "Automate invoice generation and payment collection",
                    "Maintain clear financial records for better auditing"]
            },
            {
                title: "Concession Account",
                para: "The Concession Account feature simplifies the process of granting fee discounts, scholarships, and waivers. It ensures accurate concession tracking and seamless integration with the fee management system. ",
                points: [
                    "Manage student-wise fee concessions and scholarships",
                    "Automate discount application for eligible students ",
                    "Track financial impact and generate concession reports",
                    "Reduce manual errors and maintain transparency"]
            },
            {
                title: "Billwise Detail",
                para: "The Billwise Detail feature categorizes fee transactions based on individual bills, ensuring structured and easy-to-track financial records for students and staff.",
                points: [
                    "Maintain detailed records of each bill and payment",
                    "Track installment-wise and category-wise fee payments",
                    "Generate bill-wise reports for auditing and reconciliation",
                    "Improve financial transparency and reporting accuracy"]
            },
            {
                title: "Receipt Details",
                para: "The Receipt Details feature ensures all payments made to the institution are properly documented, allowing easy retrieval of receipts for students, parents, and staff.",
                points: [
                    "Generate digital and printed receipts instantly",
                    "Track receipt history for quick reference and verification",
                    "Ensure compliance with financial auditing standards",
                    " Enhance user experience with seamless receipt retrieval"]
            },
            {
                title: "Routewise Balance",
                para: "The Routewise Balance feature helps institutions monitor outstanding and collected transportation fees based on specific bus routes, ensuring accurate financial tracking.",
                points: [
                    "Track fee collection and pending payments for each route",
                    "Categorize balances based on student pick-up/drop locations    ",
                    "Generate route-specific financial reports for better planning",
                    "Ensure accurate reconciliation of transport fees"]
            },


        ]
    },
    Payment: {
        title: "Payment Module",
        description: "Secure and Efficient Payment Processing",
        para: "Integrates multiple payment gateways for smooth financial transactions.",
        features: [
            {
                title: "Payment Gateway Integration",
                para: "Supports various online payment methods.",
                points: ["Credit/Debit card support", "UPI & Net banking", "Instant transaction updates"]
            }
        ]
    },
    Reports: {
        title: "Reports Module",
        description: "Comprehensive Reporting & Analytics",
        para: "Generates insightful reports for informed decision-making.",
        features: [
            {
                title: "Student Performance Reports",
                para: "Provides academic performance analysis.",
                points: ["Generate marksheets", "Analyze trends", "Improve student learning"]
            }
        ]
    }
};

const ModuleFeatures = () => {
    const [activeModule, setActiveModule] = useState("Administration");

    return (
        <div className="ModuleFeatures">
            {/* Hero Section */}
            <div className="container-fluid ModuleFeatures_hero mb-4 text-center py-3 pt-4">
                <div className="container">
                    <h3 className="fw-bold text-md-center text-lg-center" style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}>
                        All-in-One Solution for Effortless School Administration!
                    </h3>
                    <p className="text-secondary mx-auto pb-0" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
                        "Simplify school operations with powerful modules for admissions, attendance, fees, transport, and more."
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container ModuleFeatures_contant mt-4">
                <h3 className="text-dark text-center mb-4 fs-2">
                    Modules & Features of <span style={{ color: "rgba(11, 61, 123, 1)" }}>Xpo Media</span>
                </h3>
                <hr className="fw-bolder" />
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 h-25">
                        <div className="list-group w-auto text-center h-auto">
                            {modules.map((module) => (
                                <button
                                    key={module}
                                    className={`contant_btn list-group-item-action ${activeModule === module ? "active-btn" : ""}`}
                                    onClick={() => setActiveModule(module)}
                                >
                                    {module}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-12 col-md-12 col-lg-9  px-md-5 px-3">
                        <div className="module-content">
                            <h2 className="w-100 Mtittle ">{moduleDetails[activeModule]?.title}</h2>
                            <h4 className="text-muted Mtittlel_2 fw-semibold">{moduleDetails[activeModule]?.description}</h4>
                            <p className="text-muted fw-semibold">{moduleDetails[activeModule]?.para}</p>

                            {moduleDetails[activeModule]?.features?.map((feature, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="fw-bold">{feature.title}</h3>
                                    <p className="text-muted">{feature.para}</p>
                                    <ul className="list-unstyled  fast_contant lh-lg">
                                        {feature.points.map((point, i) => (
                                            <li key={i} className="d-flex align-items-center">
                                                <img src={img1} className="me-2 start_img" style={{ width: "24px", height: "24px" }} alt="" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>




                    {moduleDetails[activeModule]?.paragarph?.map((paragarph, index) => (
                        <div key={index} className="col-12">
                            <h3>{paragarph.title}</h3>
                            <p>{paragarph.para}</p>
                            <ul className="lh-lg mb-4">
                                {paragarph.points.map((point, i) => (
                                    <li key={i} className="list-group-item">
                                        <img src={img1} style={{ width: "30px" }} alt="" /> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}












                </div>
            </div>
        </div>
    );
};

export default ModuleFeatures;

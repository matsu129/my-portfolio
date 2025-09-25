import {
  FaJava,
  FaPython,
  FaPhp,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpring, SiPostgresql, SiGulp, SiJquery, SiTailwindcss, SiDocker, SiSnowflake } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      title: "Advertising Website Development",
      company: "Advertising",
      period: "2024/11 ~ Current",
      description: "Participated in a major project to revamp the company website, rebuild and optimize the database system, and deploy a comprehensive business intelligence solution integrated with a data warehouse, aiming to improve data accessibility, reporting efficiency, and overall decision-making capabilities across the organization.",
      environment: ["Linux", "PostgreSQL", "Snowflake"],
      technologies: ["Python"],
      image: "/images/advertising.svg",
      url: "https://www.sendenkaigi.co.jp/"
    },
    {
      title: "RAINS System Update",
      company: "Real Estate",
      period: "2023/05 ~ 2024/10",
      description:
        "Conducted basic design and integration tests for online applications; performed operational tests after implementation.",
      environment: ["Linux", "PostgreSQL"],
      technologies: ["Java"],
      image: "/images/rains.svg",
      url: "http://www.reins.or.jp/about/"
    },
    {
      title: "Automobile Insurance System Updates",
      company: "Insurance",
      period: "2022/10 ~ 2023/04",
      description:
        "Performed unit and integration tests for online applications, including data verification from Cobol to Java applications.",
      environment: ["Linux", "Oracle"],
      technologies: ["Java"],
      image: "/images/insurance.svg",
    },
    {
      title: "Driver's License Management System",
      company: "Public Sector",
      period: "2021/12 ~ 2022/08",
      description:
        "Conducted comprehensive testing from unit tests to integration tests for web applications related to driver's license management system updates.",
      environment: ["Linux", "Oracle"],
      technologies: ["Java (Spring)"],
      image: "/images/drivers_license.svg",
    },
  ];


  const techIcons = {
    "Java": <FaJava className="me-1" />,
    "Java (Spring)": <><FaJava className="me-1" /><SiSpring className="me-1" /></>,
    "Python": <FaPython className="me-1" />,
    "PHP": <FaPhp className="me-1" />,
    "JavaScript": <FaJsSquare className="me-1" />,
    "React": <FaReact className="me-1" />,
    "Bootstrap": <FaBootstrap className="me-1" />,
    "Node.js": <FaNodeJs className="me-1" />,
    "SQL": <FaDatabase className="me-1" />,
    "PostgreSQL": <SiPostgresql className="me-1" />,
    "Linux": <FaDatabase className="me-1" />,
    "Oracle": <FaDatabase className="me-1" />,
    "Snowflake": <SiSnowflake className="me-1" />,
  };

  const badgeColor = {
    "Java": "bg-danger text-white",
    "Java (Spring)": "bg-danger text-white",
    "Python": "bg-dark text-white",
    "PHP": "bg-purple text-white", // #777BB4
    "JavaScript": "bg-warning text-dark",
    "React": "bg-info text-white",
    "Bootstrap": "bg-purple text-white", // #7952b3
    "Node.js": "bg-success text-white",
    "SQL": "bg-secondary text-white",
    "PostgreSQL": "bg-info text-white",
    "Linux": "bg-secondary text-white",
    "Oracle": "bg-secondary text-white",
    "Snowflake": "bg-info text-white",
  };

  const badgeClass = "m-1 fs-6 d-flex align-items-center px-2 py-1 rounded";

  return (
    <section className="container my-5" id="experience">
      <h2>Professional Experiences</h2>
      <div className="row">
        {experiences.map((exp, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card h-100" style={{ minHeight: "250px" }}>
              <div className="d-flex flex-column flex-md-row h-100">
                {/* 画像 / プレビュー部分 */}
                <div style={{ width: "100%", maxWidth: "450px", marginBottom: "1rem", borderRadius: "0.25rem", overflow: "hidden" }}>
                  {exp.url ? (
                    <iframe
                      src={exp.url}
                      title={exp.title}
                      style={{ width: "100%", height: "500px", border: "none" }}
                    />
                  ) : (
                    exp.image && (
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="img-fluid"
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    )
                  )}
                </div>

                {/* テキスト部分 */}
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title">{exp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {exp.company}, {exp.period}
                  </h6>
                  <p className="card-text flex-grow-1">{exp.description}</p>

                  <div className="mt-auto">
                    <strong>Environment:</strong>
                    <div className="d-flex flex-wrap mt-1">
                      {exp.environment.map((env, i) => (
                        <span key={i} className={`${badgeClass} ${badgeColor[env]}`}>
                          {techIcons[env]} <span className="ms-1">{env}</span>
                        </span>
                      ))}
                    </div>

                    <strong className="mt-2 d-block">Technologies:</strong>
                    <div className="d-flex flex-wrap mt-1">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className={`${badgeClass} ${badgeColor[tech]}`}>
                          {techIcons[tech]} <span className="ms-1">{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

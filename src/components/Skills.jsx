import { FaReact, FaJsSquare, FaBootstrap, FaPython, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";


export default function Skills() {
  return (
    <section className="container my-5" id="skills">
      <h2>Skills</h2>
      <ul className="list-inline">
        <li className="list-inline-item badge bg-purple text-white m-1 fs-5" style={{ backgroundColor: '#7952b3' }}>
          <FaBootstrap className="me-1" /> Bootstrap
        </li>
        <li className="list-inline-item badge bg-warning text-dark m-1 fs-5">
          <FaJsSquare className="me-1" /> JavaScript
        </li>
        <li className="list-inline-item badge bg-info text-white m-1 fs-5">
          <FaReact className="me-1" /> React
        </li>
        <li className="list-inline-item badge bg-danger text-white m-1 fs-5">
          <FaJava className="me-1" /> Java
        </li>
        <li className="list-inline-item badge bg-dark text-white m-1 fs-5">
          <FaPython className="me-1" /> Python
        </li>
        <li className="list-inline-item badge bg-secondary text-white m-1 fs-5">
          <FaDatabase className="me-1" /> SQL
        </li>
        <li className="list-inline-item badge bg-success text-white m-1 fs-5">
          <FaNodeJs className="me-1" /> Node.js
        </li>
        <li className="list-inline-item badge bg-purple text-white m-1 fs-5" style={{ backgroundColor: '#777BB4' }}>
          <SiPhp className="me-1" /> PHP
        </li>
      </ul>
    </section>
  );
}

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      className="my-5 py-5 px-4 rounded shadow-sm"
      id="contact"
      style={{
        background: "linear-gradient(to bottom, #a0d8ff, #e6f0f9)",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-5">Contact me!</h2>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
          {/* Left: Profile */}
          <div className="flex-shrink-0 text-center text-md-start"     
          style={{
            flexBasis: "45%",
            maxWidth: "500px",
          }}>
            <h3 className="mb-3">
              Open to new opportunities
            </h3>
            <h4>
              — let’s work together!
            </h4>
            
            <p className="mb-3 lh-base">
              I’m a full-stack developer passionate about building user-friendly web applications.
              Always eager to learn new technologies and tackle challenging projects.
              Feel free to reach out if you’re looking for someone dedicated and creative!
            </p>
            <img
              src="images/profile.jpg"
              alt="Profile"
              className="rounded-circle mb-2 shadow"
              width={100}
            />
            <p className="fw-bold mb-1">Rinko Matsuoka</p>
            <p className="mb-3">
              Email: <a href="mailto:rinko@example.com">rinko@example.com</a>
            </p>

            {/* GitHub & LinkedIn */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="https://github.com/matsu129"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                style={{ fontSize: "2rem" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rin-matsuoka-643795386/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                style={{ fontSize: "2rem" }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-grow-1 d-flex justify-content-center justify-content-md-start">
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: "600px",
                width: "100%",
                marginLeft: "0", // デフォルトは0
                marginRight: "0",
              }}
              className="mx-md-0 mx-auto" // モバイルでは自動マージンで中央
            >
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>

            {status && (
              <p className="mt-3 text-center text-md-start w-100">{status}</p>
            )}
          </div>


        </div>
      </div>
    </section>
  );
}

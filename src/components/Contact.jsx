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
        background: "linear-gradient(to bottom, #aacfeaff, #e6f0f9)",
      }}
    >
      <div className="container text-center">
        <h2
          className="mb-5 fw-bold text-white"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
          }}
        >
          Contact me!
        </h2>
        <p className="mb-5 fw-bold text-white"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
          }}
        >
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>


        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
          {/* Left: Profile */}
          <div className="flex-shrink-0 text-center text-md-start"     
          style={{
            flexBasis: "45%",
            maxWidth: "500px",
          }}>
            <h3 className="mb-3 text-muted">
              Open to new opportunities
            </h3>
            <h4 className="mb-3 text-muted">
              — let’s work together!
            </h4>
            
            <p className="mb-3 lh-base text-muted">
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
            <p className="mb-3 text-muted">
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
          <div className="flex-grow-1 d-flex justify-content-start justify-content-md-start">
            <div
              className="card shadow-lg border-0"
              style={{
                maxWidth: "600px",
                width: "100%",
              }}
            >
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">Name</label>
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
                    <label className="form-label fw-bold text-secondary">Email</label>
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
                    <label className="form-label fw-bold text-secondary">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 fw-bold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            {status && (
              <p className="mt-3 text-center text-md-start w-100">{status}</p>
            )}
          </div>


        </div>
      </div>
    </section>
  );
}

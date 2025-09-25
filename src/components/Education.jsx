import { GraduationCap } from "lucide-react"; // アイコン

export default function Education() {
  return (
    <section className="container my-5" id="education">
      <h2 className="mb-4 fw-bold">Education</h2>

      <div className="d-flex justify-content-start">
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden hover-card" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            {/* 左側のロゴエリア */}
            <div className="col-md-4 d-flex align-items-center bg-light">
              <img
                src="/images/tamwood_logo.png"
                className="img-fluid p-4"
                alt="Tamwood Careers"
              />
            </div>

            {/* 右側の内容 */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center fw-bold mb-3">
                  <GraduationCap className="me-2 text-primary" size={22} />
                  Web Development Program
                </h5>
                <p className="card-text mb-2">
                  <a
                    href="https://tamwood.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none fw-semibold text-primary"
                  >
                    Tamwood Careers
                  </a>
                </p>
                <p className="text-muted small">
                  Learned to design and build interactive client-facing websites
                  using HTML, CSS, and JavaScript. Gained experience with content
                  management systems, consuming and producing web APIs, and
                  writing efficient, structured code. This program prepared me
                  for Front-end Developer and general web development roles, with
                  optional co-op work experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

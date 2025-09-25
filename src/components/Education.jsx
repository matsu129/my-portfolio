export default function Education() {
  return (
    <section className="container my-5" id="education">
      <h2 className="c mb-4 fw-bold">Education</h2>

      <div className="row justify-content-start">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">Web Development Program</h5>
              <p className="card-text mb-1">
                <a href="https://tamwood.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  Tamwood Careers
                </a>
              </p>
              <p className="text-muted small">
              Learned to design and build interactive client-facing websites using HTML, CSS, and JavaScript. 
              Gained experience with content management systems, consuming and producing web APIs, and writing efficient, structured code. 
              Program prepared for Front-end Developer and general web development roles, with optional co-op work experience.
            </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

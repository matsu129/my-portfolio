export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-5 position-relative">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-3 mb-md-0 small">
          © {new Date().getFullYear()} Rinko Matsuoka. All rights reserved.
        </p>
        <a
          href="/resume/Rinko_Matsuoka_Resume.pdf"
          className="btn btn-outline-light btn-lg fw-bold"
        >
          Download Resume
        </a>
      </div>

      {/* 下の装飾ライン */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{ height: '3px', background: 'rgba(255,255,255,0.3)' }}
      ></div>
    </footer>
  );
}

export default function Projects() {
  const projectList = [
{
  title: "Grocery Store Web Application",
  description: "Built a role-based Django application with authentication for customers, staff, and admins. Features include product management, shopping baskets with staff approval, purchase history tracking, password management, and a responsive Bootstrap 5 UI.",
  link: "https://github.com/matsu129/grocerystore",
  image: "/images/grocerystore.svg"
},
{
  title: "Flashcard Learning App",
  description: "Developed a React SPA where users can create, edit, and review flashcards with data stored in local storage. Includes multi-page navigation, responsive design, error handling, and OOP with class inheritance.",
  link: "https://github.com/risa0110/flash-card-app",
  image: "/images/flashcard.svg"
},
{
  title: "Retail-dashboard-app",
  description: "Full-stack inventory management app with product browsing, reviews, cart and checkout features. Includes a dashboard visualizing sales, stock, and reviews using Chart.js.",
  link: "https://github.com/matsu129/retail-dashboard-app",
  image: "/images/retail-dashboard.svg"
},
{
  title: "Responsive Website Project",
  description: "Created a responsive static website demonstrating modern HTML5 and CSS techniques such as semantic markup, responsive images, advanced selectors, animations, and media queries.",
  link: "https://github.com/matsu129/final-project-2",
  image: "/images/responsive-site.svg"
},
  ];

  return (
    <section className="container my-5" id="projects">
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm">
              {/* 画像追加 */}
              {project.image && (
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "0.25rem 0 0 0.25rem",
                  }}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

import "./Projects.css";
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
            <img src="/images/proj_1.png" alt="first_project" />
          </div>
          <div className="project-info">
            <p className="project-category">Personal Blog Website</p>
            <strong className="project-title">
              The Daily Journey
              <a
                href="https://github.com/eng-hussein-saad/The-Daily-Journey-Personal-Blog-Website-"
                className="more-details"
              >
                More details
              </a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/images/proj_2.png" alt="second_project" />
          </div>
          <div className="project-info">
            <p className="project-category">Bootstrap Portolio</p>
            <strong className="project-title">
              Portofolio
              <a
                href="https://github.com/eng-hussein-saad/Bootstrap-portofolio"
                className="more-details"
              >
                More details
              </a>
              <a
                href="https://eng-hussein-saad.github.io/Bootstrap-portofolio/"
                className="more-details"
              >
                demo
              </a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/images/proj_3.png" alt="third_project" />
          </div>
          <div className="project-info">
            <p className="project-category">DBMS using bash scripting</p>
            <strong className="project-title">
              DBMS
              <a
                href="https://github.com/eng-hussein-saad/bash-dbms"
                className="more-details"
              >
                More details
              </a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

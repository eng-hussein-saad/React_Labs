import "./Services.css";
function Services() {
  return (
    <section className="cards" id="services">
      <h2 className="title">Services</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-code" />
          </div>
          <div className="info">
            <h3>Front-End Development</h3>
            <p>
              Design and develop responsive, user-friendly websites using React,
              HTML5, CSS3, and JavaScript.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-server" />
          </div>
          <div className="info">
            <h3>Back-End Development</h3>
            <p>
              Build robust and scalable server-side solutions using Django,
              Python, and Node.js.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-brands fa-python" />
          </div>
          <div className="info">
            <h3>Odoo Development</h3>
            <p>
              Customize and develop Odoo modules to streamline your business
              processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;

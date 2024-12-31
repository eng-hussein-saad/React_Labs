import "./Contact.css";
function Contact() {
  return (
    <section className="cards contact" id="contact">
      <h2 className="title">Let's work together</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-phone" />
          </div>
          <div className="info">
            <h3>Phone</h3>
            <p>+201091035533</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-envelope" />
          </div>
          <div className="info">
            <h3>Email</h3>
            <p>eng.hussein.saad1@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

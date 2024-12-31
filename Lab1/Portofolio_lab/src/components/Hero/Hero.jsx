import "./Hero.css";
function Hero() {
  return (
    <>
      <section className="main">
        <div>
          <h2>
            Hello, I'm Hussein <br />
            <span>Full Stack Developer</span>
          </h2>
          <h3>
            A Communication &amp; Information Technology <br />
            Engineer passionate about Web Development
          </h3>
          <a href="mailto:eng.hussein.saad1@gmail.com" className="main-btn">
            Hire me
          </a>
          <a
            href="../../../public/Hussein Saad Web.pdf"
            className="secondry-btn"
          >
            Get CV
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/enghusseinsaad/">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/eng-hussein-saad">
              <i className="fa-brands fa-square-github" />
            </a>
            <a href="https://www.hackerrank.com/profile/eng_hussein_saa1">
              <i className="fa-brands fa-hackerrank" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;

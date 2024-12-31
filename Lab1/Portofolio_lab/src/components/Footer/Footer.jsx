import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <p className="footer-title">
        Copyrights @ <span>Hussein Saad</span>
      </p>
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
    </section>
  );
}
export default Footer;

import "./Navbar.css";
function Navbar() {
  return (
    <header>
      <a href="#" className="logo">
        Hussein
      </a>
      <nav className="navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#sk">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;

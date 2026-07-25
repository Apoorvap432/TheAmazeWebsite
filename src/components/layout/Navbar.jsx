import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

import Container from "../common/Container";
import Button from "../common/Button";

import navLinks from "../../data/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Container>
        <nav className="navbar__wrapper">
          <a href="/" className="navbar__logo">
            Amaze<span>PMS</span>
          </a>

          <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}

            <div className="navbar__mobile-btn">
              <Button>Request Demo</Button>
            </div>
          </ul>

          <div className="navbar__desktop-btn">
            <Button>Request Demo</Button>
          </div>

          <button
            className="navbar__menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-about">
          <h2 className="footer-logo">
            amaze<span>PMS</span>
          </h2>

          <p>
            Modern Property Management Software for hotels, resorts,
            serviced apartments and vacation rentals.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Modules</h3>

          <ul>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Billing</a></li>
            <li><a href="#">Housekeeping</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: info@amazepms.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>New Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AmazePMS. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
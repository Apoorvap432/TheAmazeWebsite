import "./Hero.css";

import Container from "../common/Container";
import Button from "../common/Button";

import dashboardImage from "../../assets/images/dashboard.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero__blur hero__blur--one"></div>
      <div className="hero__blur hero__blur--two"></div>

      <Container>

        <div className="hero__content">

          {/* Left Side */}

          <div className="hero__left">

            <span className="hero__badge">
              Modern Property Management Software
            </span>

            <h1>
              Transform Your
              <span> Property Management</span>
            </h1>

            <p>
              Manage hotels, vacation rentals and apartments with one powerful
              cloud platform. Automate bookings, payments and operations while
              improving guest experience.
            </p>

            <div className="hero__buttons">

              <Button>
                Request Demo
              </Button>

              <Button variant="secondary">
                Watch Video
              </Button>

            </div>

            <div className="hero__stats">

              <div>
                <h3>500+</h3>
                <span>Properties</span>
              </div>

              <div>
                <h3>98%</h3>
                <span>Customer Satisfaction</span>
              </div>

              <div>
                <h3>24/7</h3>
                <span>Support</span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="hero__right">

            <div className="dashboard">

              <img
                src={dashboardImage}
                alt="Dashboard Preview"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;
import "./Benefits.css";

import Container from "../common/Container";
import benefits from "../../data/benefits";

function Benefits() {
  return (
    <section className="benefits">

      <Container>

        <div className="benefits__wrapper">

          {/* LEFT */}

          <div className="benefits__content">

            <span className="section-tag">
              Why Choose Us
            </span>

            <h2>
              Everything You Need
              <span> In One Platform</span>
            </h2>

            <p>
              Amaze PMS simplifies hotel and property operations by combining
              reservations, payments, reporting and guest management into one
              powerful cloud solution.
            </p>

            <div className="benefits__list">

              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="benefit"
                    key={item.id}
                  >
                    <div className="benefit__icon">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT */}

          <div className="benefits__visual">

            <div className="analytics-card analytics-card--large">

              <h3>Occupancy</h3>

              <div className="progress">
                <div className="progress-fill"></div>
              </div>

              <span>82%</span>

            </div>

            <div className="analytics-grid">

              <div className="analytics-card">
                <h4>Bookings</h4>
                <strong>1,284</strong>
              </div>

              <div className="analytics-card">
                <h4>Revenue</h4>
                <strong>$42K</strong>
              </div>

              <div className="analytics-card">
                <h4>Guests</h4>
                <strong>863</strong>
              </div>

              <div className="analytics-card">
                <h4>Properties</h4>
                <strong>57</strong>
              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Benefits;
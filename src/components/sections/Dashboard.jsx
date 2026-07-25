import "./Dashboard.css";

import Container from "../common/Container";
import Button from "../common/Button";

import dashboardImage from "../../assets/images/dashboard.png";

function Dashboard() {
  return (
    <section className="dashboard-section">

      <Container>

        <div className="dashboard-section__content">

          {/* Left */}

          <div className="dashboard-section__left">

            <span className="section-tag">
              Dashboard
            </span>

            <h2>
              Monitor Your Business
              <span> In Real Time</span>
            </h2>

            <p>
              Get complete visibility into bookings, revenue,
              occupancy, payments and guest activities through one
              intelligent dashboard.
            </p>

            <ul className="dashboard-list">

              <li>Real-time occupancy reports</li>

              <li>Revenue analytics</li>

              <li>Guest insights</li>

              <li>Smart booking management</li>

            </ul>

            <Button>
              Explore Dashboard
            </Button>

          </div>

          {/* Right */}

          <div className="dashboard-section__right">

            <div className="dashboard-preview">

              <img
                src={dashboardImage}
                alt="Dashboard"
              />

              <div className="floating-card revenue-card">

                <span>Revenue</span>

                <h3>$42,580</h3>

                <p>+18% this month</p>

              </div>

              <div className="floating-card booking-card">

                <span>Bookings</span>

                <h3>1,284</h3>

                <p>Today</p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Dashboard;
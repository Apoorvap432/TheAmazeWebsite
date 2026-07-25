import "./TrustedCompanies.css";

import Container from "../common/Container";

import trustedCompanies from "../../data/trustedCompanies";

function TrustedCompanies() {
  return (
    <section className="trusted">

      <Container>

        <div className="trusted__heading">

          <span>Trusted Worldwide</span>

          <h2>
            Used by Hotels, Resorts & Vacation Rentals
          </h2>

          <p>
            Helping hospitality businesses automate daily operations and
            improve guest experiences.
          </p>

        </div>

        <div className="trusted__logos">

          {trustedCompanies.map((company) => (

            <div
              key={company.id}
              className="trusted__card"
            >
              <img
                src={company.logo}
                alt={company.name}
              />
            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default TrustedCompanies;
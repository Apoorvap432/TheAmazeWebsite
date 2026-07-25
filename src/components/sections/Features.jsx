import "./Features.css";

import Container from "../common/Container";
import FeatureCard from "../common/FeatureCard";

import features from "../../data/features";

function Features() {
  return (
    <section className="features" id="features">

      <Container>

        <div className="features__heading">

          <span>Core Features</span>

          <h2>
            Everything Needed to Manage Properties Efficiently
          </h2>

          <p>
            Powerful tools designed to simplify operations, improve guest
            satisfaction and increase revenue.
          </p>

        </div>

        <div className="features__grid">

          {features.map((feature) => (

            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Features;
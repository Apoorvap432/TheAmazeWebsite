import "./FeatureCard.css";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="feature-card">

      <div className="feature-card__icon">
        <Icon size={34} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

export default FeatureCard;
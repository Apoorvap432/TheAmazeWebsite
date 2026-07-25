import "./ModuleCard.css";

import Button from "./Button";

function ModuleCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="module-card">

      <div className="module-card__icon">

        <Icon size={42} />

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <Button variant="secondary">
        Learn More
      </Button>

    </div>
  );
}

export default ModuleCard;
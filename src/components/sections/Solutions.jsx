import "./Solutions.css";
import Container from "../common/Container";

const solutions = [
  {
    title: "Hotels & Resorts",
    description:
      "Manage reservations, front desk operations, housekeeping and guest services from one dashboard.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    title: "Vacation Rentals",
    description:
      "Simplify booking management, automate communication and maximize occupancy across platforms.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
];

const Solutions = () => {
  return (
    <section className="solutions">
      <Container>
        <div className="section-heading">
          <h2>Solutions for Every Property Type</h2>

          <p>
            Whether you manage a hotel, resort or vacation rental, AmazePMS
            helps streamline your daily operations.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="solution-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
import "./Testimonials.css";

import { Star } from "lucide-react";

import Container from "../common/Container";

import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <Container>

        <div className="testimonials__heading">

          <span className="section-tag">
            Testimonials
          </span>

          <h2>
            Loved By Hospitality Professionals
          </h2>

          <p>
            Businesses around the world trust Amaze PMS to simplify operations
            and deliver better guest experiences.
          </p>

        </div>

        <div className="testimonials__grid">

          {testimonials.map((testimonial) => (

            <article
              key={testimonial.id}
              className="testimonial-card"
            >

              <div className="testimonial-card__rating">

                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#FFD43B"
                    color="#FFD43B"
                  />
                ))}

              </div>

              <p className="testimonial-card__review">
                "{testimonial.review}"
              </p>

              <div className="testimonial-card__footer">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>

                  <h4>{testimonial.name}</h4>

                  <span>
                    {testimonial.role} • {testimonial.company}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Testimonials;
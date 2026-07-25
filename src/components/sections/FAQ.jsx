import "./FAQ.css";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";
import faq from "../../data/faq";

function FAQ() {

  const [activeId, setActiveId] = useState(1);

  function toggleQuestion(id) {
    setActiveId(activeId === id ? null : id);
  }

  return (
    <section className="faq">

      <Container>

        <div className="faq__heading">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Everything you need to know before choosing Amaze PMS.
          </p>

        </div>

        <div className="faq__list">

          {faq.map((item) => (

            <div
              key={item.id}
              className={`faq__item ${
                activeId === item.id ? "active" : ""
              }`}
            >

              <button
                className="faq__question"
                onClick={() => toggleQuestion(item.id)}
              >

                <span>{item.question}</span>

                <ChevronDown size={22} />

              </button>

              <div className="faq__answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default FAQ;
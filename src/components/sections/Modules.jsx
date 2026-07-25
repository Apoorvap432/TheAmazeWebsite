import "./Modules.css";

import Container from "../common/Container";

import ModuleCard from "../common/ModuleCard";

import modules from "../../data/modules";

function Modules() {

  return (

    <section
      className="modules"
      id="solutions"
    >

      <Container>

        <div className="modules__heading">

          <span>Solutions</span>

          <h2>
            Built For Every Property Business
          </h2>

          <p>
            Whether you manage one property or hundreds, Amaze PMS
            adapts to your business needs.
          </p>

        </div>

        <div className="modules__grid">

          {modules.map((module)=>(

            <ModuleCard

              key={module.id}

              icon={module.icon}

              title={module.title}

              description={module.description}

            />

          ))}

        </div>

      </Container>

    </section>

  );

}

export default Modules;
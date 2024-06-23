import "./index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  return (
    <section className="projectContainer" id="projects">
      <div className="description" data-aos="fade-in">
        <h1>Small selection of my projects.</h1>
      </div>

      <div className="projects" data-aos="fade-in">
        <div className="container-cards">
          <div class="card card-2"></div>
          <div className="card-description">
            <h2>FindYourDuoApp</h2>
            <p>
              The ideia of the FindYourDuoApp is approximate the gamers around
              the world and bring one way to find themselves and them play
              together.
            </p>
          </div>
        </div>
        <div className="container-cards">
          <div class="card card-3"></div>
          <div className="card-description">
            <h2>Malta Chatbot (WIP) </h2>
            <p>Chatbot based in provided texts to answer specific questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

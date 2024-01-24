import "./index.scss";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="description" data-aos="fade-right">
          <p>Let's</p>
          <h1>Dream a little bigger.</h1>
        </div>
        <div className="containerNumbers" data-aos="fade-in">
          <div className="grid-container">
            <div className="left">
              <h2>About me</h2>
              <span>
                I was born in Joinville, Santa Catarina, Brazil, and currently
                living in Malta. I start learn coding at 2011 where I had the
                first contact and since then I knew that was I would like to
                work in the future.
              </span>
              <br />
              <span>
                Graduated in Bachelorship of Information Systems and passionate
                about new technologies!
              </span>
              <br />
              <span>
                I constantly keep myself up-to-date with the company technology
                that I am working on. For this I like reading and practicing new
                languages that appear in the market to bring to the user a
                better result and experience.
              </span>
            </div>
            <div className="right">
              <div>
                <span className="r-passion">Passion</span>
              </div>
              <div>
                <span className="r-projects">Dedicated</span>
              </div>
              <div>
                <span className="r-x">Self-Taught</span>
              </div>
              <div>
                <span className="r-experience">7+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import "./index.scss";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdfCV from "../../assets/cv.pdf";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerIcons">
        <div>
          <a
            href="https://www.linkedin.com/in/gabrielpgomes/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Gabrielmtvp"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div>
          <a href={pdfCV} download="CV Gabriel Gomes">
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </a>
        </div>
      </div>
      <div>© 2022 Gabriel Gomes Pacheco. All rights reserved.</div>
    </section>
  );
};

export default Footer;

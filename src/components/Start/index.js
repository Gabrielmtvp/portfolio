import { useEffect, useState } from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnimatedLetters from "../AnimatedLetters";

import pdfCV from "../../assets/cv.pdf";

import "./index.scss";

const Start = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["G", "a", "b", "r", "i", "e", "l"];
  const jobArray = [
    "w",
    "e",
    "b",
    "_",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m&nbsp;</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>FullStack Developer / Javascript Expert</h2>
      </div>
      <div>
        <a href="#contact" className="flat-button">
          START A PROJECT REQUEST
        </a>
      </div>
      <div className="divSocialIcons">
        <div>
          <a
            href="https://www.linkedin.com/in/gabrielpgomes/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Gabrielmtvp"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
        </div>
        <div>
          <a href={pdfCV} download="CV Gabriel Gomes">
            <FontAwesomeIcon icon={faFileAlt} size="4x" />
          </a>
        </div>
      </div>
      <div className="divRowDown">
        <FontAwesomeIcon icon={faArrowDown} size="2x" className="iconRowDown" />
      </div>
    </section>
  );
};

export default Start;

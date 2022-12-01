import Slider from "react-slick";
import './index.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = (props) => {
    
    return (
        <div className="customSlider" key={props.title}>
            <img src={props.img} alt="img" />
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>GitHub Repository</span>
                <a href={props.linkGitHub}>{props.linkGitHub}</a>
            </div>
            
        </div>
    )
}

const Projects = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className='projectContainer' id="projects">
             <div className='description' data-aos="fade-in">
                    <p>Projects</p>
                    <h1>A small selection of my projects.</h1>
                </div>

                <div className='projects' data-aos="fade-in">
                    <Slider {...settings}>
                        <CustomSlider 
                            img="https://imgur.com/smhbZXM.png"
                            title="GabrielDev Portfolio"    
                            description="Portfolio that was built by me that the main objective is show my skills and explain more about my carrear and experience."
                            linkGitHub="..."
                        />
                        <CustomSlider 
                            img="https://raw.githubusercontent.com/Gabrielmtvp/Project-JobsCalc-Node-Ejs/master/.github/jobscalc.png"
                            title="JobsCalc"    
                            description="JobsCalc is a calculation estimation application for freelance projects, where it is possible to register and exclude jobs (projects), obtaining a cost estimate for each job.
                            In addition, it is possible to plot the hourly value of the person who will be using the system 💰"
                            linkGitHub="https://github.com/Gabrielmtvp/Project-JobsCalc-Node-Ejs"
                        />
                        <CustomSlider 
                            img="https://camo.githubusercontent.com/5b9fb788ede1a5f8173383758861fe872dc0796e9ebba536d42bf5f4d743abdd/68747470733a2f2f696d6775722e636f6d2f4b4931685548592e706e67"
                            title="FindYourDuoApp"    
                            description="The ideia of the FindYourDuoApp is approximate the gamers around the world and bring one way to find themselves and them play together."
                            linkGitHub="https://github.com/Gabrielmtvp/Project-FindYourDuoApp"
                        />
                    </Slider>
                </div>
        </section>
    )
}

export default Projects;
import { useState } from 'react'

import './index.scss'

import nextJs from '../../assets/images/nextjs.png'
import graphQl from '../../assets/images/graphql.png'
import mongoDb from '../../assets/images/mongodb.png'
import cell from '../../assets/cell2.png'

import { faHtml5, faJs, faReact, faAmazon, faGoogle, 
    faJava, faNodeJs, faGithub, faDocker, faCss3Alt, faSass, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {

    const [txtButton, setTxtButton] = useState('frontend');

    const handleSkillsTab = (tab) => {
        return txtButton === tab ? 'active' : '';
    }
    
    return (
        <section className="container-skills" id="skills">
            <div className='description' data-aos="fade-right">
                <h1>Skills that I have to ignite your project.</h1>
            </div>

            <div className='skills' data-aos="zoom-in">
                <div className={'activeImage3d'}>
                    <img src={cell} alt='mobile'  />
                </div>
                <div className='containerPanelsSkills'>
                    <div className='buttonsSkills'>
                        <button onClick={() => setTxtButton('frontend')} className={`${handleSkillsTab('frontend')}`} >Front-end</button>
                        <button onClick={() => setTxtButton('backend')} className={`${handleSkillsTab('backend')}`} >Back-end</button>
                        <button onClick={() => setTxtButton('other')} className={`${handleSkillsTab('other')}`}>Others</button>
                    </div>
                    <div className='panelsSkills'>
                        <div className={`${handleSkillsTab('frontend')}`}>
                            <div className='image3d'>
                                <FontAwesomeIcon icon={faHtml5} size="5x" style={{color:"orange"}}/>
                                <span>HTML5</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faCss3Alt} size="5x" style={{color:"lightblue"}} />
                                <span>CSS3</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faReact} size="5x" style={{color:"lightblue"}} />
                                <span>ReactJs</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faJs} size="6x" style={{color:"yellow"}} />
                                <span>JavaScript</span>
                            </div>
                            <div className='image3d'>
                                <FontAwesomeIcon icon={faSass} size="6x" style={{color:"pink"}} />
                                <span>Sass</span>
                            </div>
                        </div>
                        <div className={`${handleSkillsTab('backend')}`}>
                            <div className='image3d'>
                                <FontAwesomeIcon icon={faNodeJs} size="6x" style={{color:"green"}} />
                                <span>NodeJs</span>
                            </div>
                            
                            <div className='image3d'>
                                <img src={graphQl} width={70} height={70} alt="graphql"  />
                                <span>GraphQL</span>
                            </div>

                            <div className='image3d'>
                                <img src={mongoDb} width={20} height={70} alt="mongodb"  />
                                <span>MongoDB</span>
                            </div>
                            
                            <div className='image3d'>
                                <FontAwesomeIcon icon={faJava} size="6x" style={{color:"lightblue"}} />
                                <span>Java</span>
                            </div>
                        </div>
                        <div className={`${handleSkillsTab('other')}`}>
                            <div className='image3d'>
                                <img src={nextJs} width={100} alt="nextjs" />
                                <span>NextJs</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faAmazon} size="6x" style={{color:"orange"}} />
                                <span>Amazon Cloud</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faGoogle} size="6x" style={{color:"lightyellow"}} />
                                <span>Google Cloud</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faGithub} size="6x" style={{color:"white"}} />
                                <span>GitHub</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faDocker} size="6x" style={{color:"lightblue"}} />
                                <span>Docker</span>
                            </div>

                            <div className='image3d'>
                                <FontAwesomeIcon icon={faMailchimp} size="6x" style={{color:"yellow"}} />
                                <span>MailChimp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
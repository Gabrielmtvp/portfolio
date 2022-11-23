import './index.scss'
import { faHtml5, faJs, faReact, faAmazon, faGoogle, 
    faJava, faNodeJs, faGithub, faDocker, faCss3Alt, faSass, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import nextJs from '../../assets/images/nextjs.png'
import graphQl from '../../assets/images/graphql.png'
import mongoDb from '../../assets/images/mongodb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cell from '../../assets/cell.png'
import { useState } from 'react'

const Skills = () => {

    const [txtButton, setTxtButton] = useState('frontend');
    
    return (
        <section className="container-skills" id="skills">
            <div className='description'>
                <h1>Skills that I have to ignite your project.</h1>
            </div>

            <div className='skills'>
                <div className={`${txtButton === "frontend" ? 'activeImage3d' : 'hiddenImage3d'}`}>
                    <img src={cell}  />
                </div>
                <div className={`${txtButton === "backend" ? 'activeImage3d' : 'hiddenImage3d'}`}>
                    <img src={cell}  />
                </div>
                <div className={`${txtButton === "other" ? 'activeImage3d' : 'hiddenImage3d'}`}>
                    <img src={cell}  />
                </div>
                <div className='containerPanelsSkills'>
                    <div className='buttonsSkills'>
                        <button onClick={() => setTxtButton('frontend')}>Front-end</button>
                        <button onClick={() => setTxtButton('backend')}>Back-end</button>
                        <button onClick={() => setTxtButton('other')}>Others</button>
                    </div>
                    <div className='panelsSkills'>
                        <div className={`${txtButton === "frontend" ? 'active' : ''}`}>
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
                        <div className={`${txtButton === "backend" ? 'active' : ''}`}>
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
                        <div className={`${txtButton === "other" ? 'active' : ''}`}>
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
                {/* <div className='image3d'>
                    <FontAwesomeIcon icon={faHtml5} size="6x" style={{color:"orange"}}/>
                    <span>HTML5</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faCss3Alt} size="6x" style={{color:"lightblue"}} />
                    <span>CSS3</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faJs} size="6x" style={{color:"yellow"}} />
                    <span>JavaScript</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faReact} size="6x" style={{color:"lightblue"}} />
                    <span>ReactJs</span>
                </div>

                <div className='image3d'>
                    <img src={nextJs} width={100} alt="nextjs" />
                    <span>NextJs</span>
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
                    <FontAwesomeIcon icon={faAmazon} size="6x" style={{color:"orange"}} />
                    <span>Amazon Cloud</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faGoogle} size="6x" style={{color:"lightyellow"}} />
                    <span>Google Cloud</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faJava} size="6x" style={{color:"lightblue"}} />
                    <span>Java</span>
                </div>

                <div className='image3d'>
                    <FontAwesomeIcon icon={faNodeJs} size="6x" style={{color:"green"}} />
                    <span>NodeJs</span>
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
                    <FontAwesomeIcon icon={faSass} size="6x" style={{color:"pink"}} />
                    <span>Sass</span>
                </div>
                <div className='image3d'>
                    <FontAwesomeIcon icon={faMailchimp} size="6x" style={{color:"yellow"}} />
                    <span>MailChimp</span>
                </div> */}
            </div>
           
        </section>
        );
    }

export default Skills;
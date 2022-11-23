import './index.scss'

const About = () => {
    return (
        <>
            <section className='about' id="about">
                <div className='description'>
                    <p>Let's</p>
                    <h1>Dream a little bigger.</h1>
                </div>
                <div className='containerNumbers'>
                    <div className='grid-container'>
                        <div className='left'>
                            <h2>About me</h2>
                            <span>
                                I was born in Joinville, Santa Catarina, Brazil, and currently living in Dublin, Ireland. I start learn coding at 2011 where I had the first contact and since then I knew that was I would like to work in the future.
                            </span>
                            <br />
                            <span>
                                Graduated in Bachelorship of Information Systems and passionate about new technologies!
                            </span>
                            <br />
                            <span>
                                I constantly keep myself up-to-date with the company technology that I am working on. For this I like reading and practicing new languages that appear in the market to bring to the user a better result and experience.
                            </span>
                        </div>
                        <div className='right'>
                            <div>
                                <span className='r-passion'>100% Passion</span>
                            </div>
                            <div className='r-experience'>
                                7+ Years
                                Experience
                            </div>
                            <div className='r-projects'>
                                3+ Projects
                            </div>
                            <div>
                                <span className='r-x'>Self-Taught</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
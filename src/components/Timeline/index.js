import './index.scss'

const Timeline = () => {
    return (
        <section className='timelineContainer' id="timeline">
            <div className='descriptionTimeline'>
                <p>Timeline</p>
                <h1>Companies that I've been experience.</h1>
            </div>
            <div class="flip flip-vertical">
                <div class="front">
                    <h1 class="text-shadow">Software Engineer, ClusterStack</h1>
                    <p>JUN 2022 - Present</p>
                </div>
                <div class="back">
                    <h1>Software Engineer</h1>
                    <p>As Software Engineer I'm working to help the company build a system that have as mainly idea bring more information and opportunities to the person that want immigrate to another country.</p>
                </div>
            </div>
            <div class="flip flip-vertical">
                <div class="front">
                    <h1 class="text-shadow">Java Software Engineer, Freedom System</h1>
                    <p>AUG 2015 - DEC 2021</p>
                </div>
                <div class="back">
                    <h2>Java Software Enginner</h2>
                    <p>At Freedom System I was worked as Java Software developer, and as some tasks that I had to perform being start new projects, talk with their clients, get the requirements of the project and build projects with clean code and excellence using the languages of the company.
Sometimes handling with problems and having to find the best approach to solve them, giving to the client the best result and experience.
In different cases I had to learn new languages, methods and external API's to improve the project experience.</p>
                </div>
            </div>
        </section>
    )
}

export default Timeline;
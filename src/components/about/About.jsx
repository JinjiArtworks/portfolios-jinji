import "./about.css"
import Profiles from "../../assets/profiles.jpeg"
import AboutBox from "./AboutBox"
const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Profiles} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <div className="about__description">
                            Take a look of my works here 👇
                        </div>
                        <a href="https://drive.google.com/drive/u/0/folders/1H_ViWEC5hEuhx-GsTMvUhOwtrqho4eIo" target="_blank" className="btn">My Portfolio</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name ">Professional Skill </h3>
                            </div>
                            <ul>
                                <li>
                                    <small> → CSS (Bootstrap 5 and Tailwind)</small>
                                </li>
                                <li>
                                    <small> → Javascript (JQuery, AJAX, Vue JS, Nuxt JS, and Basic React JS)</small>
                                </li>
                                <li>
                                    <small> → PHP (Laravel and CI 4)</small>
                                </li>
                                <li>
                                    <small> → DBMS (MySQL)</small>
                                </li>
                            </ul>

                        </div>
                        {/* <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Designer</h3>
                                <span className="skills__number">Intermediete</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Graphic Design</h3>
                                <span className="skills__number">Beginner</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage graphic"></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <AboutBox></AboutBox>
        </section>
    )
}

export default About
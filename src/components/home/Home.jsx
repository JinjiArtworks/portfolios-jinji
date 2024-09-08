import "./home.css"
import Profiles from "../../assets/profiles.jpeg"
import HeaderSocials from "./HeaderSocials"
import ScrollDown from "./ScrollDown"
const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Profiles} className="home__img" alt="" />
                <h1 className="home__name">Muhammad Virgi</h1>
                <span className="home__education">
                    <i>
                        "I have no special talents. I am only passionately curious."
                        <br />
                        Albert Einstein
                    </i>
                </span>
                <br />
                <HeaderSocials />
                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home
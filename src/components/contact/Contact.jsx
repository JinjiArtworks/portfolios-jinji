import Img from "../../assets/giphy.gif"
import './contact.css'
const Contact = () => {
    return (
        <section className='contact container section' id='contact'>
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Contact Me :</h3>
                    <div className="contact__details">Email : virgiharto2508@gmail.com</div>
                    <div className="contact__details">Instagram : <a target='_blank' href="https://instagram.com/virgih_">
                        <span className="anchor__">@virgih_</span>
                    </a>
                    </div>
                </div>

                {/* Add GIF Image */}
                <div className="contact__gif">
                    <img src={Img} alt="Contact GIF" className="contact__gif-image" />
                </div>
            </div>
        </section>
    )
}

export default Contact
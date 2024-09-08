const AboutBox = () => {
    return (
        <div className='about__boxes grid'>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className='about__title'>15 +</h3>
                    <span className='about__subtitle'>Project Complete</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className='about__title'>2+</h3>
                    <span className='about__subtitle'>Years of Experience</span>
                </div>
            </div>


            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className='about__title'>10 +</h3>
                    <span className='about__subtitle'>Satisfied Clients</span>
                </div>
            </div>

            {/* <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className='about__title'>433</h3>
                    <span className='about__subtitle'>Nomineess Winner</span>
                </div>
            </div> */}
        </div>
    )
}

export default AboutBox
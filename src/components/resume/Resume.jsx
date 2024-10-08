import Card from './Card'
import Data from './Data'
import './resume.css'
const Resume = () => {
    return (
        <section className='resume container section' id='resume'>
            <h2 className='section__title'>Experience</h2>
            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === 'past') {
                            return (
                                // mengirim props ke card component
                                <Card
                                    key={id}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc} />)
                        }
                    })}
                </div>
                <div className="timeline grid">
                    {Data.map((val, index) => {
                        if (val.category === 'present') {
                            return (
                                <Card
                                    key={index}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc} />)
                        }
                    })}
                </div>
            </div>
        </section >
    )
}

export default Resume
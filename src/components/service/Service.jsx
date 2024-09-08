import './service.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful digital experiences that connect with users seamlessly.'
    },
    {
        id: 2,
        image: Image2,
        title: 'Web Development',
        description: 'Building fast, modern, and responsive websites that bring your ideas to life on the web.'
    },
    {
        id: 3,
        image: Image3,
        title: 'Graphic Designer',
        description: 'Creating visually stunning designs that capture your brands essence and engage the audience.'
    }
]
const Service = () => {
    return (
        <section className='services container section' id='services'>
            <h2 className="section__title">Services</h2>
            <div className="services__container grid">
                {data.map((item) => (
                    // SEND THE PROPS name {item}
                    <div className="services__card" key={item.id}>
                        <img src={item.image} alt="" className='services__img' />
                        <h3 className='services__title'>{item.title}</h3>
                        <span className='services__description'>{item.description}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service
import './portfolio.css'
import { useState } from 'react'
import Menu from './Menu'
const Portfolio = () => {
    const [items, setItems] = useState(Menu)
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem
        })
        setItems(updatedItems)
    }
    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">
                Recent Works
            </h2>
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)} >All</span>
                <span className="work__item" onClick={() => filterItem('Web Development')}>Web Development</span>
                <span className="work__item" onClick={() => filterItem('Design')} >Design</span>
            </div>
            <div className="work__container grid">
                {items.map((item) => (
                    <div className="work__card" key={item.id}>
                        <div className="work__thumbnail">
                            <img src={item.image} width="100%" className='work__img' alt="" />
                            <div className="work__mask"></div>
                        </div>
                        <span className="work__category">{item.category}</span>
                        <h3 className="work__title">{item.title}</h3>
                        {/* <a href="" className='work__button'>
                            <i className="icon-link work__button-icon"></i>
                        </a> */}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
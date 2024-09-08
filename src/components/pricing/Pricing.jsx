import './pricing.css'
import React, { useState } from 'react'
import Pricelist from './Pricelist'
const Pricing = () => {
    const [items] = useState(Pricelist)
    return (
        <section className='pricing container section' id='pricing'>
            <h2 className='section__title'>Pricing Plans</h2>
            <div className="pricing__container grid">
                {items.map((item) => (
                    <div className={item.type === 'Recommended' ? 'pricing__item best' : 'pricing__item'} key={item.id}  >
                        {item.type === 'Recommended' && <span className="badge">Recommended</span>}
                        <img src={item.image} className="pricing__img" alt="" />
                        <h3 className="pricing__plan">{item.plan}</h3>
                        <p className="pricing__title">{item.title}</p>
                        <p className="pricing__support">{item.support}</p>
                        <h3 className="price">
                            <em>{item.price} / </em><span>Month</span>
                        </h3>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
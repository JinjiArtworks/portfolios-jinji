import './testimonials.css'
import 'swiper/css';
import 'swiper/css/pagination';
// 
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Data from './Data';
const Testimonials = () => {
    return (
        <section className='testimonials container section' id='testimonials'>
            <h2 className='section__title'>Clients Reviews</h2>
            <Swiper className="testimonials__container grid"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                {Data.map((item) => (
                    <SwiperSlide className="testimonials__item" key={item.id}>
                        <div className="thumb">
                            <img src={item.image} alt="" width="100%" />
                        </div>
                        <h3 className="testimonials__title">{item.title}</h3>
                        <div className="subtitle">{item.subtitle}</div>
                        <div className="comment">{item.comment}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
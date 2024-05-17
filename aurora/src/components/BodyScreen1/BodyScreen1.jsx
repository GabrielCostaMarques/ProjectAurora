import styles from './BodyScreen1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, EffectFade} from "swiper/modules"
import "swiper/css/effect-fade"



export default function BodyScreen1({slides}) {



    return (

        <section className={styles.BodyMain}>
            <Swiper
                pagination={{clickable:true,}}
                slidesPerView={1}
                modules={[Autoplay,EffectFade]}
                autoplay={{delay:5000,disableOnInteraction:false}}
                effect="fade"
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="slider Hero" className={styles.MainBodyContent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}
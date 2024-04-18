import styles from './BodyScreen1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, EffectFade} from "swiper/modules"
import "swiper/css/effect-fade"

import slideImages from '../../assets/imges-export'

export default function BodyScreen1() {
// Fake api para os slides
    const dataImages = [
        { id: 1, image: `${slideImages.image1}`},
        { id: 2, image: `${slideImages.image2}`},
        { id: 3, image: `${slideImages.image3}`},
        
    ]

    return (

        <section className={styles.BodyMain}>
            <Swiper
                pagination={{clickable:true,}}
                slidesPerView={1}
                modules={[Autoplay,EffectFade]}
                autoplay={{delay:5000,disableOnInteraction:false}}
                effect="fade"
            >
                {dataImages.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="slider Hero"
                            className={styles.MainBodyContent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}


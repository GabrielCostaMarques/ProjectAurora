import styles from './BodyScreen1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css/effect-fade"
import capaSliderMain from '../../assets/capa-slider-main.jpg';
import bagRed from '../../assets/bag-red.jpg';
import modelWithBag from '../../assets/modelWithBag.jpg';

const images = [
    { id: "0", image: capaSliderMain },
    { id: "1", image: bagRed },
    { id: "2", image: modelWithBag }
];


export default function BodyScreen1() {


    return (    
        <section className={styles.BodyMain}>                
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    effect="fade"
                    >
                    {images.map((item) => (
                        <SwiperSlide key={item.id}>
                            
                            <img src={item.image} alt="slider Hero" className={styles.MainBodyContent} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </section>
    )
}

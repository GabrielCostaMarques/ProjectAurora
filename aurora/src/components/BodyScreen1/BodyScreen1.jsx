import styles from './BodyScreen1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import capaMain from '../../assets/capa-slider-main.jpg'

export default function BodyScreen1() {

    const dataImages = [
        { id: 1, image: `${capaMain}`},
        { id: 2, image: "https://manualdoagente.com.br/wp-content/uploads/2024/04/Banner-hero-al-ut-V3-scaled.jpg" },
        { id: 3, image: "https://manualdoagente.com.br/wp-content/uploads/2024/04/Banner-hero-al-ut-V3-scaled.jpg" }
    ]

    return (

        <section className={styles.BodyMain}>
            <Swiper
                slidesPerView={1}
                pagination={{clickable:true}}
                navigation

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
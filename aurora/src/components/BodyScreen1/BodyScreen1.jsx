import styles from './BodyScreen1.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css/effect-fade"
import { useFetchItems } from '../../hooks/useFetchQuery'

const URL = "http://localhost:3000/imgSlider"

export default function BodyScreen1() {
    const { getRequest } = useFetchItems('slides', URL);
    const { isLoading, isError, data } = getRequest;

    return (
        <section className={styles.BodyMain}>
            {isLoading && <p>Carregando...</p>}
            {isError && <p>Erro ao carregar.</p>}
            {!isLoading && !isError && (
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    effect="fade"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="slider Hero" className={styles.MainBodyContent} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    )
}

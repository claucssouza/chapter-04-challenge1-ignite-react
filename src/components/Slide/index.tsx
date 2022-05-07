import { Image } from '@chakra-ui/react';
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slide.module.scss';

const Slide = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay, A11y]}
            className={styles.slide}
        >
            <SwiperSlide className={styles.slideItem}><Image src="/images/africa.png" maxWidth='1440rem' /></SwiperSlide>
            <SwiperSlide className={styles.slideItem}><Image src="/images/asia.png" maxWidth='1440rem' /></SwiperSlide>
            <SwiperSlide className={styles.slideItem}><Image src="/images/north_america.png" maxWidth='1440rem' /></SwiperSlide>
            <SwiperSlide className={styles.slideItem}><Image src="/images/oceania.png" maxWidth='1440rem' /></SwiperSlide>
            <SwiperSlide className={styles.slideItem}><Image src="/images/south_america.png" maxWidth='1440rem' /></SwiperSlide>
        </Swiper>
    )
}

export { Slide }
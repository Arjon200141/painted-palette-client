import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , EffectFlip } from 'swiper/modules';


import 'swiper/swiper-bundle.css';

const BannerSlider = () => {
    return (
        <div className='mx-6 my-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                effect="flip"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/4Th5wN6/village-house-summer-day-blue-sky-surface-266732-25264.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/MDz4WWv/modern-house-exterior-sale-rent-293060-7831.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vd3GWrD/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge-125.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide className='h-1/2'>
                    <img src="https://i.ibb.co/XYWvRHy/modern-cape-cod-house-with-sleek-exterior-minimalist-design-elements-large-windowsgenerative-ai-7620.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
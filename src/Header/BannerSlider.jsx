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
                    <img src="https://i.ibb.co/gF1NrxV/banner1.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7ngDQ39/banner2.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JrcT4TX/banner3.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide className='h-1/2'>
                    <img src="https://i.ibb.co/WnCKFLz/banner4.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
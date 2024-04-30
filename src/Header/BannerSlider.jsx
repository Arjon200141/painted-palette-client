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
                    <img src="https://i.ibb.co/d51y6L8/hand-drawn-woman-face-template-drawing-image-ai-generated-art-853163-4679.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/m47Nbv3/portrait-adult-woman-digital-art-style-23-2151122947.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/q75TTqR/watercolor-painting-flower-with-purple-green-leaves-772785-6165.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide className='h-1/2'>
                    <img src="https://i.ibb.co/Fqhz453/drawings-about-legal-profession-23-2151190705.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default BannerSlider;
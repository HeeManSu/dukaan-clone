import React from 'react'
import quote from "../assets/quote.svg"
import people3 from "../assets/people3.webp"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div className='pt-[100px]'>
            <div>
                <div>
                    <img className='flex mx-auto' src={quote} alt="" />
                    <div className='text-[36px] leading-[42px] font-[700] text-[#1a181e] text-center -tracking-[0.2px] pt-[35px]'>
                        Hear from our satisfied customers
                    </div>

                    <div className='text-[20px] text-[#4d4d4d] pt-[15px] text-center'>
                        From beginners to enterprise brands, everyone loves Dukaan!
                    </div>
                </div>

                <div className='flex justify-center lg:flex-row flex-col gap-10 mt-[60px] flex-wrap'>
                    <Card />
                    <Card />
                    {/* <Card /> */}
                </div>
            </div>
        </div>
    )
}

export default Testimonials


const Card = () => {
    return (
        <div className='boxshadow4 lg:mx-0 mx-auto md:px-[60px] px-[35px] md:py-[70px] py-[20px] xl:max-w-[35%] xl:w-[35%] lg:max-w-[42%] lg:w-[42%] md:max-w-[70%] max-w-[95%] h-fit'>
            <div>
                <img className='pb-[18px]' src="https://mydukaan.io/_next/static/images/wow-logo-506ff91f087f4f6e6a04217a2adcd7a6.svg" alt="no-image" />
                <div className='text-[20px] leading-[28px] font-[600] tracking-[0.2px] text-[#1a181e] pb-[18px] text-start '>
                    “Ecommerce tech for amazing experience!”
                </div>
                <div className='text-[18px] text-start leading-[26px] text-gray-400'>
                    I tried many “so called” ecommerce platforms, but they were all so complicated. Dukaan is super easy. I can manage my store from my phone just like using WhatsApp.
                    Magical!
                </div>
                <div className='flex pt-[40px] items-center'>
                    <img className='rounded-full h-[60px] w-[60px]' src={people3} alt="" />
                    <div className='pl-[15px]'>
                        <div className='text-[18px] leading-[26px] font-[600] tracking-[0.2px] text-[#1a181e]'>
                            Somashekar Patil
                        </div>
                        <div className='text-[16px] leading-[24px] font-[500] text-[#999] tracking-[0.2px]'>
                            VP of Growth of WOW Skin Science
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
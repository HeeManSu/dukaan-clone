import React from 'react'
import theme1 from "../assets/theme1.webp"
import theme2 from "../assets/theme2.png"
import theme3 from "../assets/theme3.webp"
import theme4 from "../assets/theme4.webp"
import theme5 from "../assets/theme5.webp"
import theme6 from "../assets/theme6.webp"
import CameraTheme from "../assets/cameraTheme.png"

const Theme = () => {
    return (
        <>
            <div className='px-[12px]  md:pt-[80px] pt-[50px] xl:mb-[90px] mb-[60px]'>
                <div className='md:text-[36px] text-[28px] text-center  md:leading-[42px] leading-[32px] text-[#1a181e] font-[700] -tracking-[0.2px]'>
                    Kickstart your online store with these themes
                </div>
                <div className='pt-[70px] flex items-center  md:flex-wrap md:flex-row flex-col gap-10 justify-center md:px-[40px] px-[20px]'>
                    {/* <div className='pt-[110px] flex gap-10 flex-wrap justify-center'> */}
                    <Single image={theme1} heading="Tinker" />
                    <Single image={CameraTheme} heading="Enigma" />
                    <Single image={theme2} heading="Ursa" />
                </div>
                <div className='pt-[70px] flex items-center   md:flex-wrap md:flex-row flex-col gap-10 justify-center md:px-[40px] px-[20px]'>
                    <Single image={theme3} heading="Mana" />
                    <Single image={theme4} heading="Nirvana" />
                    <Single image={theme6} heading="Oxford" />
                </div>
            </div>
            <div className='rounded-[3px] mx-auto text-[18px]  border w-fit px-[24px] py-[9px] text-[#1a181e] border-[#1a181e]'>
                <button>View all</button>
            </div>
        </>
    )
}

export default Theme


const Single = ({ image, heading }) => {
    return (

        <div className=' sm:max-w-[25%] max-w-[95%] rounded-lg filter1 max-h-[500px]'>
            <a href="https://mydukaan.io/tinkr">
                <img className='' src={image} alt="Image description" />
                <h3 className='md:text-[24px] text-[20px]  md:text-start text-center leading-[32px] font-[600] text-[#1a181e] md:mt-[20px] pt-[12px]'>
                    {heading}
                </h3>
            </a>



        </div>
    )
}
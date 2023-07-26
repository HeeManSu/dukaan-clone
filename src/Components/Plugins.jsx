import React from 'react'
import first from "../assets/first.svg"
import second from "../assets/second.svg"
import third from "../assets/third.svg"
import fourth from "../assets/fourth.svg"
import fifth from "../assets/fifth.svg"
import sixth from "../assets/sixtg.svg"
import seventh from "../assets/seventh.svg"
import eighth from "../assets/eight.svg"
import ninth from "../assets/ninth.svg"
import tenth from "../assets/tenth.svg"
import eleventh from "../assets/eleven.svg"
import twelveth from "../assets/twelth.svg"
import thirteen from "../assets/thirteenth.svg"
import left from "../assets/left.svg"

const Plugins = () => {
    return (
        <div className='mt-[70px]  '>
            <div className='bg-[rgba(250,183,59,.1)] pb-[60px]'>

                <div className='text-[36px] text-center pt-[60px] leading-[42px] font-[700] tracking-[0.2px] px-[15px] mx-auto max-w-[80%] text-[#1a181e]'>
                    Enhance your site's functionality with plugins
                </div>

                <div className='text-[20px] max-w-[736px] mx-auto leading-[28px]  text-[#4d4d4d] text-center pt-[22px] px-[15px]'>
                    Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There's a plugin for everything.
                </div>


                <div className='flex pt-[50px] overflow-hidden justify-between'>
                    <div className='pt-[58px] overflow-clip  '>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={first} alt="" />
                    </div>
                    <div className='pt-[46px] rounded-lg'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={left} alt="" />
                    </div>
                    <div className='pt-[24px] rounded-lg'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={second} alt="" />
                    </div>
                    <div className='pt-[0px]  rounded-lg '>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={third} alt="" />
                    </div>
                    <div className='pt-[18px] rounded-lg'>
                        <img className='min-h-[80px] min-w-[80px]' src={fourth} alt="" />
                    </div>
                    <div className='pt-[42px] '>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={fifth} alt="" />
                    </div>
                    <div className='pt-[76px] rounded-lg'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={sixth} alt="" />
                    </div>
                    <div className='pt-[76px]'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={seventh} alt="" />
                    </div>
                    <div className='pt-[42px]'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={eighth} alt="" />
                    </div>
                    <div className='pt-[18px]'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={ninth} alt="" />
                    </div>
                    <div>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={tenth} alt="" />
                    </div>
                    <div className='pt-[24px]'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={eleventh} alt="" />
                    </div>
                    <div className='pt-[46px]'>
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={twelveth} alt="" />
                    </div>
                    <div className='pt-[58px]' >
                        <img className='min-h-[80px] min-w-[80px] rounded-lg' src={thirteen} alt="" />
                    </div>
                </div>

                <div className='rounded-[3px]  leading-[26px] tracking-[0.2px] mt-[50px] mx-auto text-[18px]  border-[1px] w-fit px-[24px] py-[8px] text-[#1a181e] border-[#1a181e]'>
                    <button>Take a look</button>
                </div>

            </div>
        </div>
    )
}

export default Plugins
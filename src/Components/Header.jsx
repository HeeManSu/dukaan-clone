import React from 'react'
import { FaApple } from "react-icons/fa"
import playstore from "../assets/playstore.svg"
import headerimage from "../assets/headerimage.webp"

const Header = () => {
  return (
    <>

      <div className='xl:px-44 md:px-16 px-6 lg:h-[745px] md:h-[860px] sm:h-[890px] h-[760px]  overflow-hidden background w-full  bg-no-repeat bg-cover '>
        <div className='lg:mt-[200px] mt-[120px] flex md:flex-row flex-col md:justify-between '>
          <div className='md:w-[480px] w-full'>
            <p className='animation md:text-[48px] text-[32px] pb-[16px] font-[800] font-archivo leading-tight '>
              The global commerce platform, built for performance
            </p>
            <p className='animation md:text-[20px] text-[16px] font-archivo header2 md:mb-[40px] mb-[32px]'>
              Effortlessly launch a stunning online store, attract and convert more customers.
            </p>
            <button className='animation btn1 md:px-[32px] px-[24px] md:py-[16px] py-[12px] md:text-[20px] text-[16px] leading-[28px]'>
              Start 7 day trial
            </button>
            <div className='animation flex gap-2 md:pt-10 pt-5'>
              <p className='text-[14px] leading-[20px] text-[#4d4d4d]'>Also availabe on </p>
              <FaApple className='animation h-[20px] w-[20px]' />
              <button>
                <img className='animation h-[20px] w-[20px]' src={playstore} alt="no-image" />
              </button>
            </div>
          </div>
          <div className='relative pt-5'>
            <img className='absolute lg:-top-[90px] md:top-[168px]   xl:-right-[360px] lg:-right-[400px] md:-right-[340px] sm:-right-[120px] -right-[80px] right xl:max-w-[860px] md:max-w-[800px] xl:max-h-[780px] sm:max-w-[700px] sm:max-h-[600px] md:max-h-[700px] max-w-[420px] max-h-[300px]' src={headerimage} alt="" />
          </div>
        </div>

      </div>
      {/* <div className='bg-white w-full h-[20px]'>

      </div> */}
    </>
  )
}

export default Header
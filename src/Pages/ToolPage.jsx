import React from 'react'
import Navbar from '../Components/Navbar'

const ToolPage = () => {
    return (

        <>
            <div>
                <Navbar />
            </div>
            <div className='pt-[100px]  xl:px-44 md:px-16 px-6 lg:h-[745px] md:h-[860px]' >

                <div>
                    <div className='md:text-[36px] text-[30px] pt-[70px] leading-[42px] font-[600]'>
                        Free tools to run your business
                    </div>
                    <div className='flex flex-wrap lg:gap-[50px] gap-[20px] justify-center  pt-[50px]'>
                        <div className=' boxshadow3 cursor-pointer 2xl:basis-[33%] lg:basis-[40%] mdbasis-[48%] basis-full py-[12px] rounded-lg px-[20px]  border'>
                            <a className='text-[20px] leading-[28px]  font-[500] text-[#1a181e]' href="#businessloancalculator">
                                <img className='h-[210px] pb-[20px] w-full rounded-lg' src="https://mydukaan.io/images/tools/gst-calculator.jpg" alt="" />
                                Business loan calculator
                                <p className='text-[16px] flex max-w-full  leading-[24px] text-[#4d4d4d] pt-[5px]'>Calculate your business loan with our business loan calculator</p>
                            </a>
                        </div>
                        <div className='  boxshadow3 cursor-pointer 2xl:basis-[33%] lg:basis-[40%] md:basis-[48%] basis-full py-[12px] rounded-lg px-[20px]  border' >
                            <a className='text-[20px] leading-[28px]  font-[500] text-[#1a181e]' href="#businessloancalculator">
                                <img className='h-[210px] pb-[20px] w-full rounded-lg' src="https://mydukaan.io/images/tools/product-description.jpg" alt="" />
                                Barcode generator
                                <p className='text-[16px] leading-[24px] text-[#4d4d4d] pt-[5px]'>Generate barcode for your products</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ToolPage
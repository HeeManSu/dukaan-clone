import React from 'react'
import launchFast from '../assets/lauchFast.svg'
import purpleStar from '../assets/purpleStar.svg'
import greenStar from '../assets/greenStar.svg'
import blueStar from '../assets/blueStar.svg'
import scaleFaster from '../assets/scaleFaster.svg'
import manageBetter from '../assets/manageBetter.svg'

const launchFeatures = [
    "Fully responsive e - commerce website & mobile app.",
    "Loads 6X faster than existing solutions.",
    "Upload /import products and inventory in bulk.",
    "Integrate payment gateways.",
    "Easily customizable themes."
]

const scaleFeatures = [
    "Guaranteed 99.5 % uptime for your store - We keep you open for business.",
    "60 + third party plugins.",
    "Marketing tools and discounts to drive repeat orders.",
    "Add staff accounts, assign different roles.",
    "Unlimited transactions, 0 % transaction fees.",
]

const manageFeatures = [
    'Order tracking, invoicing and order reports.',
    'Bulk edit product prices, variants, inventory.',
    'Manage global deliveries.',
    'In - depth business analytics.',
    'Automate all tax calculations.'
]

const Features = () => {
    return (
        <div className='md:pt-[102px] pt-[70px] w-full overflow-clip xl:px-36 md:px-16 px-6'>
            <div>
                <div>
                    <p className='md:text-[40px] md:leading-[42px] md:font-[700] md:-tracking-[0.2px] text4 mx-auto max-w-[910px] flex text-center '>Whether you’re a startup or an established business, here’s why Dukaan is your best choice</p>
                </div>
                <div className='md:pt-20 pt-14 w-full animation'>
                    <div className='flex md:flex-row flex-col-reverse'>

                        <img className='sm:w-[42%] pt-[8px]' src={launchFast} alt="launch_Fast" />
                        <div className='md:pl-20  flex flex-col justify-center'>
                            <p className='md:text-[28px] md:leading-[26px] md:font-[700] md:mb-[32px] text-[20px] font-[700] mb-[16px]   md:text-start text-center'>Launch Fast</p>
                            {launchFeatures.map((item, index) => {
                                return (
                                    <FeatureDescription key={index} image={purpleStar} description={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='md:pt-14 pt-10 animation'>
                    <div className='flex  w-full md:flex-row flex-col'>
                        <div className='flex sm:w-[46%]  flex-col justify-center'>
                            <p className='md:text-[28px] md:leading-[26px] md:font-[700] md:mb-[32px] text-[20px] font-[700] mb-[16px]   md:text-start text-center'>Scaler Faster</p>
                            {scaleFeatures.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        <FeatureDescription image={blueStar} description={item} />
                                    </div>
                                )
                            })}
                        </div>
                        <img className='md:w-[54%] md:pl-[80px] pt-[8px]' src={scaleFaster} alt="launch_Fast" />
                    </div>
                </div>
                <div className='md:pt-14 pt-10 animation'>
                    <div className='flex md:flex-row flex-col-reverse'>
                        <img className='md:w-[43%] pt-[8px]' src={manageBetter} alt="launch_Fast" />
                        <div className='flex  flex-col md:pl-20 justify-center'>
                            <p className='md:text-[28px] md:leading-[26px] md:font-[700] md:mb-[32px] text-[20px] font-[700] mb-[16px]   md:text-start text-center'>Manage Better</p>
                            {manageFeatures.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        <FeatureDescription image={greenStar} description={item} key={index} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features

const FeatureDescription = ({ image, description }) => {
    return (
        <div className='flex gap-3 items-center'>
            <img className={`relative 
          
            ${image == blueStar && description == "Guaranteed 99.5 % uptime for your store - We keep you open for business." ? 'md:bottom-[22px] bottom-[18px]' : 'bottom-[9px]'
                }`} src={image} alt="" />
            <p className='md:text-[18px] md:leading-[26px] mb-[16px] font-[400] md:mb-[16px] text-[14px] leading-[20px]'>{description}</p>

        </div>
    )
}


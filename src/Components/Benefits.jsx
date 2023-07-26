import React from 'react'
import clock from "../assets/clock.svg"
import trolley from "../assets/trolley.svg"
import warehouse from "../assets/warehouse.svg"
import account from "../assets/account.svg"
import phone from "../assets/phone.svg"
import analytics from "../assets/analytics.svg"

const Benefits = () => {
  return (
    <div className='mt-[80px] '>
      <div className='bg-[rgba(250,183,59,.1)] py-[60px] '>
        <div>
          <div className='md:text-[36px] text-[30px] px-[15px] text-center leading-[42px] font-[700] tracking-[0.2px] text-[#1a181e]'>
            E-commerce Simplified, Success Amplified
          </div>
          <div className='pt-[20px] px-[12px] md:text-[20px] text-[17px] text-center leading-[28px] text-[#4d4d4d] tracking-[0.2px]'>
            Empowering your online business growth with all the essential tools.
          </div>
        </div>

        <div className='mx-[20px] justify-center mt-[30px] flex gap-6 flex-wrap'>
          <Single image={clock} heading="Site Speed" description="Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!" />
          <Single image={warehouse} heading="Multi-Warehouse" description="One store, multiple locations. Ship products from multiple warehouses across India." />
          <Single image={trolley} heading="Optimised Checkouts" description="Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates." />
          <Single image={account} heading="Staff Accounts" description="Add employees, colleagues and teammates to help you grow your business while managing access." />
          <Single image={phone} heading="Android App" description="The world is mobile. It's time your store is too. Get more loyal customers with your mobile app." />
          <Single image={analytics} heading="Advanced Analytics" description="All the information about your sales, traffic, regions and products, just a single click away." />
        </div>
      </div>
    </div>
  )
}

export default Benefits


const Single = ({ image, heading, description }) => {
  return (
    <div className='bg-white max-w-[352px] h-full  boxshadow3'>
      <div className='px-[20px] py-[20px]'>
        <div>
          <img className='mx-auto' src={image} alt="no_clock" />
        </div>
        <div className='text-[20px] leading-[28px] font-[600] text-[#1a181e] pt-[20px] text-center'>
          {heading}
        </div>

        <div className='text-[18px] pt-[10px] leading-[26px] font-[400] text-[#4d4d4d] text-center tracking-[0.2px]'>
          {description}
        </div>
      </div>
    </div>
  )
}


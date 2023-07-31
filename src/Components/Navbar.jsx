import React, { useState } from 'react'
import dukkanlogo from "../assets/dukkanlogo.svg";
import product2 from "../assets/product2.svg"
import product1 from "../assets/product1.svg"
import product3 from "../assets/product3.svg"
import product4 from "../assets/product4.svg"
import company1 from "../assets/company1.svg"
import company2 from "../assets/company2.svg"
import company3 from "../assets/company3.svg"
import company4 from "../assets/company4.svg"
import { FiChevronDown } from "react-icons/fi";
import hamburger from "../assets/hamburger.svg"
import cross from "../assets/cross.svg"
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={`xl:px-44 md:px-16 px-6 z-50 fixed pb-4  ${navbar ? 'bg-white' : 'bg-transparent'} w-full pt-4`}>
      <div className="lg:block hidden">
        <div className='flex items-center justify-between'>
          <div className="flex  items-center">
            <Link to="/"><img src={dukkanlogo} alt="logo" className="w-[156px] h-[44px]" /></Link>
            <ul className="lg:pl-20 pl-14 lg:gap-10 gap-6 flex ">
              <li className='group' onMouseOver={() => setNavbar(true)}>
                <button className="header1 flex items-center gap-1 py-4">
                  Products
                  <FiChevronDown className='h-[20px] w-[20px]' />
                </button>
                <div onMouseOver={() => setNavbar(true)} className={`hidden -z-10 group-hover:block top-[45px] pt-[65px] px-44 absolute bg-white w-full left-0 `}>
                  <div className='dropdown-items'>
                    <div className='flex flex-wrap'>

                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={product4} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'> Dukaan themes</b>
                          Discover themes from our curated collection & start with the one perfect for you business
                        </span>
                      </span>

                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={product3} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>Dukaan delivery</b>
                          Your pan-India hassle-free shipping partner.
                        </span>
                      </span>
                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={product2} alt="noimage" />
                        </span>
                        <Link to="/plugins">  <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>Dukaan plugins</b>
                          Add extra functionality, features, and customization with the help of plugins.
                        </span></Link>
                      </span>
                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={product1} alt="noimage" />
                        </span>
                        <Link to="/tools">  <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-1 text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>Business tools</b>
                          Free tools to help take your business to the next level.
                        </span></Link>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className='group' onMouseOver={() => setNavbar(true)}
                onMouseOut={() => setNavbar(false)}>
                <button className="header1 flex gap-1 items-center py-4">
                  Company
                  <FiChevronDown className='h-[20px] w-[20px]' />
                </button>
                <div className='hidden  group-hover:block -z-10  top-[45px] pt-[65px] px-44 absolute bg-white w-full left-0'>
                  <div className=' dropdown-items'>
                    <div className='flex flex-wrap'>

                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={company1} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'> Blog</b>
                          Get useful tips on how to start & grow your online business.
                        </span>
                      </span>

                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={company2} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>Careers</b>
                          Join the team and be a part of the rocketship.
                        </span>
                      </span>
                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={company3} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-[2px] text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>About</b>
                          The who, what, and why of Dukaan.
                        </span>
                      </span>
                      <span className='dropdown'>
                        <span className='mr-[16px]'>
                          <img className='min-w-max' src={company4} alt="noimage" />
                        </span>
                        <span className='text-start pl-[16px] flex flex-col leading-[20px] text-[14px]
                      font-normal gap-1 text-[#4d4d4d]'>
                          <b className='dropdown-item-header'>Help center</b>
                          Advice and answers from the Dukaan Team.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li><button className="header1 hover:underline py-4">Pricing</button></li>
            </ul>
          </div>
          <div className='flex gap-6 header1'>
            <button className='hover:underline'>Sign In</button>
            <button className='btn1 leading-[26px] py-[12px] px-[24px]'>Start free trial</button>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className='lg:hidden'>

        <div className='flex justify-between items-center'>
          <Link to="/">         <img className={`h-[32px] w-[40px] ${toggle ? 'bg-gray-100' : ""}`} src={toggle ? cross : hamburger} alt="toggle" onClick={() => setToggle(!toggle)} /></Link>
        </div>

        <div className={`${toggle ? "right-0" : "hidden right-[-100%]"} bg-[#ffffff] top-0 -z-50 right-0 w-[100%]   absolute h-[100vh] `}>

          <div>


            <div className='flex  md:justify-center px-6 pt-28'>
              <ul className='flex flex-col gap-5'>
                <li className='group' onMouseOver={() => setNavbar(true)}>
                  <button onClick={() => {
                    setOpen(!open)
                    setOpen1(!setOpen1)
                  }

                  } className={`header1 font-[600] ${open ? " relative  md:right-11 " : ""} flex items-center gap-1`}>
                    Products
                    <FiChevronDown className='h-[20px] w-[20px]' />
                  </button>

                  {open &&
                    <div className={`flex ${open ? " relative  md:right-11 " : ""} flex-col gap-6 pt-4`}>

                      <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={product4} alt="noimage" />
                        <p className='text-[16px]' >Dukaan Themes</p>
                      </div>
                      <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={product3} alt="noimage" />
                        <p className='text-[16px]' >Dukaan Delivery</p>
                      </div>
                      <Link to="/plugins"> <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={product2} alt="noimage" />
                        <p className='text-[16px]' >Dukaan Plugins</p>
                      </div></Link>
                      <Link to="/tools">  <div className='flex pb-3 gap-3'>
                        <img className='w-[24px] h-[24px]' src={product1} alt="noimage" />
                        <p className='text-[16px]' >Business Tools</p>
                      </div></Link>
                    </div>
                  }
                </li>
                <li className={`group ${''}`} onMouseOver={() => setNavbar(true)}>
                  <button onClick={() => {
                    setOpen1(!open1)
                    setOpen(!setOpen)
                  }
                  } className={`header1 font-[600]  ${open1 ? "relative  md:right-8 " : ""} flex items-center gap-1`}>
                    Company
                    <FiChevronDown className='h-[20px] w-[20px]' />
                  </button>

                  {open1 &&
                    <div className={`flex  ${open1 ? "relative  md:right-8 " : ""} flex-col gap-6 pt-4`}>

                      <div className='flex gap-3 pt-2'>
                        <img className='w-[24px] h-[24px]' src={company1} alt="noimage" />
                        <p className='text-[16px]' >Blog</p>
                      </div>
                      <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={company2} alt="noimage" />
                        <p className='text-[16px]' >Careers</p>
                      </div>
                      <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={company3} alt="noimage" />
                        <p className='text-[16px]' >About</p>
                      </div>
                      <div className='flex gap-3'>
                        <img className='w-[24px] h-[24px]' src={company4} alt="noimage" />
                        <p className='text-[16px]' >Help Center</p>
                      </div>
                    </div>
                  }
                </li>
                <li>
                  <button className='header1 hover:underline font-[600] '>Pricing</button>
                </li>
              </ul>



            </div>
            <div className='absolute bottom-12 mx-auto text-center w-full'>
              <button className='bg-[#146eb4]  text-[18px] rounded-[4px] py-[11px] px-[25px] text-white'>
                Download App
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import govo from "../assets/govo.svg"
import healthxp from "../assets/healthxp.svg"
import lemonade from "../assets/lemonade.svg"
import uppercase from "../assets/uppercase.svg"
import styleup from "../assets/styleup.svg"
import vu from "../assets/vu.svg"
import wow from "../assets/wow.svg"
import truke from "../assets/truke.svg"
import nutkets from "../assets/nutkets.svg"
import vector from "../assets/vector.svg"

const Carousel = () => {

    const logos = [
        uppercase,
        govo,
        lemonade,
        styleup,
        vu,
        wow,
        truke,
        nutkets,
        vector,
        healthxp
    ]

    const carsouselItems = [...logos, ...logos];


    return (
        <div className='bg-[#1a181e] flex items-center w-full h-[150px]'>
            <div className='flex carousel-container whitespace-nowrap '>

                <div className=' justify-center carousel  flex gap-[60px] '>

                  
                    {carsouselItems.map((item, index) => (
                        <img className='carousel-item' key={index} src={item} alt="no-image" /> 
                    ))}
                  
                </div>



            </div>

        </div>
    )
}

export default Carousel




// const Carousel = () => {
//     const logoItems = [
//         govo,
//         healthxp,
//         lemonade,
//         uppercase,
//         styleup,
//         vu,
//         wow,
//         truke,
//         nutkets,
//         vector,
//     ];

//     // Duplicate the logo items to create a continuous loop
//     const carouselItems = [...logoItems, ...logoItems];

//     return (
//         <div className='carousel-container'>
//             <div className='carousel'>
//                 {carouselItems.map((item, index) => (
//                     <img className='carousel-item' src={item} alt='no-image' key={index} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;
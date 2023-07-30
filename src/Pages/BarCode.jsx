import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Barcode from 'react-barcode'

const BarCode = () => {

    const [text, setText] = useState("");

    function generateBarcode(e) {
        setText(e.target.value);
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='pt-[100px] sm:mb-0 mb-[25px]  xl:px-44 md:px-16 px-6 lg:h-[745px] md:h-[860px]' >
                <div className='w-full'>
                    <div className='md:text-[36px] text-[30px] md:text-start text-center pt-[70px] leading-[42px] font-[600]'>
                        Barcode Generator
                    </div>
                    <div className='flex flex-col  md:max-w-[40%] max-w-full mx-auto pt-[50px]'>

                        <label className='text-[20px] text-start' htmlFor="text">Enter the data</label>
                        <input type="text" value={text} onChange={(e) => { generateBarcode(e) }} className='indent-[10px] md:max-w-[70%] md:w-[70%] w-full border-[#e6e6e6] px-[10px] mt-[8px] py-[10px] border-2 placeholder:text-[16px] rounded-lg' placeholder='Enter the data..' />

                        <div className='pt-[20px]'>
                            {text && <Barcode value={text} />}
                        </div>
                    </div>




                </div>
            </div>
        </>
    )

}

export default BarCode
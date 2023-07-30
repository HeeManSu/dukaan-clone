import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const BusinessLoan = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [tenure, setTenure] = useState(1);
    const [emi, setEmi] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateEmi = () => {
        // Convert interest rate from percentage to decimal
        const rate = interestRate / 100 / 12;

        // Calculate EMI
        const numInstallments = tenure * 12;
        const emi =
            (loanAmount * rate * Math.pow(1 + rate, numInstallments)) /
            (Math.pow(1 + rate, numInstallments) - 1);

        // Calculate total amount payable and total interest
        const totalAmount = emi * numInstallments;
        const totalInterest = totalAmount - loanAmount;

        setEmi(emi);
        setTotalAmount(totalAmount);
        setTotalInterest(totalInterest);
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='pt-[100px] sm:mb-0 mb-[25px]  xl:px-44 md:px-16 px-6 lg:h-[745px] md:h-[860px]' >


                <div className='w-full'>
                    <div className='md:text-[36px] text-[30px] md:text-start text-center pt-[70px] leading-[42px] font-[600]'>
                        Business loan calculator
                    </div>

                    <div className='pt-[50px]  '>

                        <div className='flex md:flex-row flex-col'>
                            <div className='lg:max-w-[48%] lg:w-[48%] md:max-w-[55%] md:w-[55%]'>
                                <div className='flex flex-col '>
                                    <label className='text-[18px]' htmlFor="number">Enter loan amount &nbsp; &nbsp; (₹)</label>
                                    <input className='indent-[10px] md:max-w-[70%] md:w-[70%] w-full border-[#e6e6e6] px-[10px] mt-[8px] py-[10px] border-2 placeholder:text-[16px] rounded-lg' type="number" placeholder='Enter loan amount' value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
                                </div>
                                <div className='flex flex-col mt-[30px]'>
                                    <label className='text-[18px]' htmlFor="number">Enter interest rate &nbsp; &nbsp; (%)</label>
                                    <input className='indent-[10px] md:max-w-[70%] md:w-[70%] w-full  border-[#e6e6e6] px-[10px] mt-[8px] py-[10px] border-2 placeholder:text-[16px] rounded-lg' type="number" placeholder='Enter interest rate' value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                                </div>
                                <div className='flex flex-col  mt-[30px]'>
                                    <label className='text-[18px]' htmlFor="number">Loan Tenure &nbsp; &nbsp; (Years)</label>
                                    <input className='indent-[10px] md:max-w-[70%] md:w-[70%] w-full border-[#e6e6e6] px-[10px] mt-[8px] py-[10px] border-2 placeholder:text-[16px] rounded-lg' type="number" placeholder='Loan Tenure' value={tenure} onChange={(e) => setTenure(e.target.value)} />
                                </div>
                                <button onClick={calculateEmi} className='text-white mt-[30px] text-[18px] bg-[#146eb4] rounded-md leading-[26px] py-[12px] px-[24px]'>Calculate</button>


                            </div>
                            <div className='lg:w-[40%] md:w-[45%] md:max-w-[45%] h-fit border mt-[50px] boxshadow3 rounded-lg lg:max-w-[40%]'>
                                <div className='  border boxshadow3 rounded-t-lg px-[15px] py-[22px]'>
                                    <div className='text-[18px] leading-7 font-[500]'>Monthly Emi:  <span className='pl-[20px]'>₹ {emi.toFixed(2)}
                                    </span></div>
                                    <div className='text-[18px] pt-[15px] leading-7 font-[500]'>Total Interest:  <span className='pl-[20px]'>₹ {totalInterest.toFixed(2)}
                                    </span></div>
                                    <div className='text-[18px] pt-[15px] leading-7 font-[500]'>Total Amount:  <span className='pl-[20px]'>₹ {totalAmount.toFixed(2)}
                                    </span></div>
                                </div>



                                <div className='bg-blue-400 rounded-b-lg py-[15px] text-white  px-[12px] text-[20px]'>
                                    Your Monthly Emi is: <span className='pl-[20px]'>₹ {emi.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default BusinessLoan
import React from 'react'
import { AllDropdownHover1, AllDropdownHover2, AllRightpart } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'

const Error404 = () => {
    return (
        <>
            <div>
                <section className='SHOP-DROPDOWN py-2 bg-[#292930]'>
                    <div className='flex justify-between items-center px-72'>
                        <div className='flex '>
                            <AllDropdownHover1 />
                            <AllDropdownHover2 />
                        </div>
                        <AllRightpart />
                    </div>
                </section>

                <section className='SHOP-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='SHOP-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='Error404 px-72 my-[100px]'>
                    <div className='flex items-center'>
                        <div className='pr-[100px]'>
                            <div className='flex mb-2'>
                                <i class="ri-error-warning-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                                <h1 className='flex items-center text-[#FF497C] text-sm font-bold ml-2'>Oops! Somthing's missing.</h1>
                            </div>
                            <h1 className='text-5xl font-bold text-[#27272E] mb-10'>Page not found</h1>
                            <p className='text-gray-500'>It seems like we dont find what you searched. The page you were looking for doesn't exist, isn't available loading incorrectly.</p>
                            <div className='mt-14'>
                                <a href="#" className=" relative px-12 py-5 rounded-md font-semibold  text-white bg-[#FF497C]
                        before:absolute 
                        before:content-[''] 
                        before:w-[220px] 
                        before:rounded-md 
                        before:left-0 
                        before:right-0 
                        before:top-0 
                        before:bottom-0 
                        before:bg-[#FF497C]  
                        before:-z-10 
                        before:hover:scale-110  
                        before:duration-300
                         ">Back To Home <i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>

                        <div className='bg-cover'>
                            <img className='' src="../src/assets/pages/error/asset 2.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className='SHOP-FOOTER px-72'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Error404

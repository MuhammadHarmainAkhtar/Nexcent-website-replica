import React from 'react'
import productPageImg from '../assets/productPageImg.png';
import teslaImg from '../assets/teslaImg.png';
import logo1 from '../../src/assets/Logo1.png';
import logo2 from '../../src/assets/Logo2.png';
import logo3 from '../../src/assets/Logo3.png';
import logo4 from '../../src/assets/Logo4.png';
import logo5 from '../../src/assets/Logo5.png';
import logo6 from '../../src/assets/Logo6.png';
import logo7 from '../../src/assets/Logo7.png';
import right from '../../src/assets/right.png';

export default function Products() {
    return (
        <div id='product'>
            <div className='px-4 lg:px-14 max-w-[1920px] mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div><img src={productPageImg} alt="" /></div>
                    <div className='md:w-3/5 mx-auto '>
                        <h2 className='text-4xl text-neutralDGrey font-bold mb-4 md:w-4/5 '>How to design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>

            </div>
            <div className='px-4 lg:px-14 max-w-[1920px] mx-auto bg-neutralSilver py-16' id='testimonial'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img className='md:ml-[100px] md:h-[100%] md:w-[75%]' src={teslaImg} alt="" />
                    </div>
                    <div className='md:w-2/3 mx-auto '>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h2 className='text-brandPrimary text-xl font-bold mb-2'>Tim Smith</h2>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src={logo1} alt="" className='cursor-pointer' />
                                <img src={logo2} alt="" className='cursor-pointer' />
                                <img src={logo3} alt="" className='cursor-pointer' />
                                <img src={logo4} alt="" className='cursor-pointer' />
                                <img src={logo5} alt="" className='cursor-pointer' />
                                <img src={logo6} alt="" className='cursor-pointer' />
                                <img src={logo7} alt="" className='cursor-pointer' />
                                <div className='text-brandPrimary hover:text-neutral-700 transition-all duration-300 font-bold '><a href="">Meet All Customers<span className='inline-block ml-2'><img src= {right} alt="" /></span> </a></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

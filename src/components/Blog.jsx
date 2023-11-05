import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import right from '../../src/assets/right.png';

export default function () {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1 },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blog2 },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-[1920px] mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralGrey font-bold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto '>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img className='hover:scale-95 transition-all duration-300' src={blog.image} alt="" />
                        <div className='text-center px-4 py-8 bg-white rounded-md shadow-lg md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h2 className='mb-3 text-neutralGrey font-bold'>{blog.title}</h2>
                            <div className='text-brandPrimary hover:text-neutral-700 transition-all duration-300 font-bold '><a href="">Read More<span className='inline-block ml-2'><img src={right} alt="" /></span> </a></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

import React from 'react'
import WhiteRight from '../assets/WhiteRight.png';

export default function NewsLetter() {
  return (
    <div className='px-4 lg:px-14 max-w-[1920px] mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-bold mb-6 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
                <div className='flex justify-center items-center gap-8'>
                    <button className='btn-primary'>Get a Demo <span className='inline-block'><img src={WhiteRight} alt="" /></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

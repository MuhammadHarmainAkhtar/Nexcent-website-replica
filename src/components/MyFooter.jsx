import React from 'react'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/NavbarIcon.png';
import send from '../assets/send.png';

export default function MyFooter() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Footer container className='bg-[#263238] text-white'>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='space-y-4 md:px-10 md:py-10 mb-[40px] '>
              <a href="" className='font-semibold flex items-center space-x-3'>
                <img src={logo} alt="" className='w-10 inline-block items-center' />
                <span className='text-white md:text-4xl text-2xl'>NEXCENT</span>
              </a>
              <div>
                <p className='mb-1 md:mt-[50px]'>Copyright Ⓒ 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title className='text-white' title="company" />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href="#">
                    About us
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Blog
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Contact us
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Pricing
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Testimonials
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='text-white' title="support" />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href="#">
                    Help Center
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Terms of service
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Legal
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Privacy policy
                  </Footer.Link>
                  <Footer.Link className='text-white' href="#">
                    Status
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className='items-center'>
                <h2 className='text-white font-bold'>STAY UP TO DATE</h2>


                <div>
                  <input type="text" placeholder='Your email address' className='text-black rounded-[10px] md:mt-[35px] mt-[10px]'></input>
                  <button><img className='md:inline-block md:absoulute md:-translate-x-8 hidden hover:transition-all duration-300 hover:transform hover:scale-125 ' src={send} alt="" /></button>
                  <button className='md:hidden flex btn-primary'>Send me</button>
                </div>


              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className='text-white'
              by="MUHAMMAD HARMAIN AKHTAR™"
              href="#"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className='text-white'
                href="#"
                icon={BsFacebook}
              />
              <Footer.Icon className='text-white'
                href="#"
                icon={BsInstagram}
              />
              <Footer.Icon className='text-white'
                href="#"
                icon={BsTwitter}
              />
              <Footer.Icon className='text-white'
                href="#"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

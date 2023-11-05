import React from 'react'
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import MemberIcon from '../assets/MemberIcon.png';
import NationAssociationIcon from '../assets/NationAssociationIcon.png';
import ClubIcon from '../assets/ClubIcon.png';

export default function Services() {
    const services = [
        { id: 1, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments", image: MemberIcon },
        { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: NationAssociationIcon },
        { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: ClubIcon }
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h1 className='text-4xl text-neutralGrey font-bold mb-2'>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
                {/* COMPANY LOGO  */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                </div>
            </div>
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h1 className='text-4xl text-neutralGrey font-bold mb-2'>Manage your entire community in a single system</h1>
                <p className='text-neutralGrey'>Who is Nexcent suitable for?</p>
            </div>

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center' key={service.id}>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img className='-ml-5' src={service.image} alt="" /></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

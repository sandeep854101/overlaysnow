import React from 'react';
import logo from '../assets/logo.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiSearch, CiUser } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import { ImCart } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' sticky top-0 left-0 w-full z-50 bg-white border-b-2 '>
            <div className='h-[2.8rem] bg-[black] text-[white] flex gap-6 justify-center items-center'>
                <FaArrowLeft />
                <p>Upto 40% off on Winter Bestsellers | valid till August end</p>
                <FaArrowRight />
            </div>
            <div className='flex justify-between items-center px-[4rem] py-2'>
                <div className='flex gap-3 items-center'>
                    <CiSearch className='text-[1.5rem]' />
                    <input type="text" className='border-none outline-none text-[1rem]' placeholder='Search...' />
                </div>
                <div className='w-[5rem]'>
                    <Link to="/">
                    <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='flex gap-6 items-center text-[1.7rem]  '>
                    <MdOutlineMail className='cursor-pointer'/>
                    <CiUser className='cursor-pointer'/>
                    <ImCart className='cursor-pointer'/>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;

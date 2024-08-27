import React from 'react';
import logo from '../assets/logo.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiSearch, CiUser } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import { ImCart } from 'react-icons/im';

const Navbar = ({ navbar }) => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-lg'>
            <div className='h-[2.8rem] bg-[black] text-[white] flex gap-6 justify-center items-center'>
                <FaArrowLeft />
                <p>Upto 40% off on Winter Bestsellers | valid till August end</p>
                <FaArrowRight />
            </div>
            <div className='flex justify-between items-center px-[4rem]'>
                <div className='flex gap-3 items-center'>
                    <CiSearch className='text-[1.5rem]' />
                    <input type="text" className='border-none outline-none text-[1rem]' placeholder='Search...' />
                </div>
                <div className='w-[5rem]'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='flex gap-4 items-center text-[1.5rem]'>
                    <MdOutlineMail />
                    <CiUser />
                    <ImCart />
                </div>
            </div>
            <hr className="border-t-2 border-gray-200 shadow-lg mx-[2rem] my-2" />
            <div className='flex justify-center items-center gap-10 py-6 text-[1.1rem]'>
                {navbar.map((item) => (
                    <div key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;

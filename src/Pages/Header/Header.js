import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assists/Power Hack.jpeg"

const Header = () => {
    return (
        <div className='flex justify-between bg-[#8ecae6] md:px-10 px-4 py-3'>
            {/* <h1 className='hover:text-[#023047]'>img</h1> */}
            <img src={logo} alt="" className='w-[80px]' />
            <div className='flex  gap-3'>
                <h1>Paid Total : <span>0</span></h1>
                <Link to='../login' className='bg-'>Log out</Link>
            </div>
        </div>
    );
};

export default Header;
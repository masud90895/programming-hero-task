import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assists/Power Hack(white).png"
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Header = () => {
    const {bills} = useContext(AuthContext)

    const totalAmount = bills?.map((amount) => amount.amount)
    const sumAmount = totalAmount.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr), 0)

   


    
    return (
        <div className='flex justify-between bg-[#8ecae6] md:px-10 px-4 py-3 text-lg'>
            {/* <h1 className='hover:text-[#023047]'>img</h1> */}
            <div>
                <Link to='/'> <img src={logo} alt="" className='w-[150px] h-full' /></Link>
            </div>
            <div className='flex  gap-3'>
                <h1>Paid Total : <span>{sumAmount}</span></h1>
                
            </div>
        </div>
    );
};

export default Header;
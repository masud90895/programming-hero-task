import React from 'react';

const Table = () => {
    return (
        <div className='mt-10 text-xl'>
            <div className='md:flex justify-between bg-[#8ecae6] py-3 md:px-12 rounded px-4'>
                <div className='flex md:gap-3 gap-2 items-center'>
                    <h1 className='text-2xl '>Billing</h1>
                    <input type="text" placeholder='Search...' className='border rounded-lg p-1 '/>
                </div>
                <div className='mt-5 md:mt-0'>
                    <button className='text-black bg-white py-1 px-4 rounded-lg border border-white hover:bg-[#8ecae6]  '>Add New Bill</button>
                </div>
            </div>
        </div>
    );
};

export default Table;
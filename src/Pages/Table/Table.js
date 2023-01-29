import React from 'react';

const Table = () => {
    return (
        <div className='mt-10 text-xl'>
            <div className='md:flex justify-between bg-[#8ecae6] py-3 md:px-12 '>
                <div className='flex gap-3 items-center'>
                    <h1>Billing</h1>
                    <input type="text" placeholder='Search...' className='border rounded-lg p-1'/>
                </div>
                <div>
                    <button>Add New Bill</button>
                </div>
            </div>
        </div>
    );
};

export default Table;
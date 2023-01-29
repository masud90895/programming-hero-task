import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal';

const Table = () => {
    const [showModal,setShowModal] = useState(false)
    return (
        <div className='mt-10 text-xl'>
            <div className='md:flex justify-between bg-[#8ecae6] py-3 md:px-12 rounded px-4'>
                <div className='flex md:gap-3 gap-2 items-center'>
                    <h1 className='text-2xl '>Billing</h1>
                    <input type="text" placeholder='Search...' className='border rounded-lg p-1 '/>
                </div>
                <div className='mt-5 md:mt-0'>
                    <button onClick={()=>setShowModal(true)} className='text-black bg-white py-1 px-4 rounded-lg border border-white hover:bg-[#8ecae6]  '>Add New Bill</button>
                </div>
            </div>

            {/* table  */}

<div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 mt-10">
  <table className="min-w-full divide-y divide-gray-200 text-sm border-collapse ">
    <thead className="bg-[#8ecae6]">
      <tr>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200"
        >
          Billing ID
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200"
        >
          Full Name
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200"
        >
          Email
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200"
        >
          Phone
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200"
        >
          Paid Amount
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 "
        >
          Action
        </th>
      </tr>
    </thead>

    <tbody className="divide-y  divide-gray-200">
      <tr>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900  border border-r-gray-200">
          John Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">$120,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">$120,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">$120,000</td>
      </tr>

    </tbody>
  </table>
</div>
        {
            showModal && <Modal setShowModal={setShowModal}/>
        }
        </div>
    );
};

export default Table;
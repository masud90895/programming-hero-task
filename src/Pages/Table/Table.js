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

            {/* table  */}

<div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 mt-10">
  <table className="min-w-full divide-y divide-gray-200 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Name
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Date of Birth
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Role
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Salary
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

      <tr>
        
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Table;
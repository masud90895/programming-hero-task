import React from 'react';

const Modal = ({setShowModal}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center shadow-xl border border-black  duration-1000 transition ease-in-out">
      <div className="relative w-11/12 max-w-lg bg-white rounded-lg shadow-lg border p-4 duration-1000 transition ease-in-out">
        <div className="py-4 text-2lg font-medium">
          Add New Bill Details
        </div>
        <div className="">
          Modal Content
        </div>
        <div className="py-4 text-right">
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400" onClick={()=>setShowModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
    );
};

export default Modal;
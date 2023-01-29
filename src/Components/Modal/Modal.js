import React from 'react';
import { useForm } from "react-hook-form";

const Modal = ({setShowModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const addData=(data)=>{  
console.log(data);
}
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center shadow-xl border border-black  duration-1000 transition ease-in-out">
      <div className="relative w-11/12 max-w-lg bg-white rounded-lg shadow-lg border p-4 duration-1000 transition ease-in-out">
        <div className="py-4 text-2lg font-medium">
          Add New Bill Details
        </div>
        <form onSubmit={handleSubmit(addData)} className="flex flex-col gap-3" >
        <div>
            <label
              className={`block mb-2 text-sm ${errors.fullName && "text-red-600"}`}
            >
             Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter fullName..."
              className={`w-full px-3 text-[16px] py-2 border rounded-md ${
                errors.fullName
                  ? "border-red-600 focus:border-red-600"
                  : "border-gray-700"
              } `}
              {...register("fullName", { required: true })}
            />
          </div>
          {errors.fullName && (
            <span className="text-red-600 text-sm">Full Name is required</span>
          )}

<div>
            <label
              className={`block mb-2 text-sm ${errors.email && "text-red-600"}`}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
              className={`w-full px-3 text-[16px] py-2 border rounded-md ${
                errors.email
                  ? "border-red-600 focus:border-red-600"
                  : "border-gray-700"
              } `}
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-600 text-sm">Email Field is required</span>
          )}

<div>
            <label
              className={`block mb-2 text-sm ${errors.phone && "text-red-600"}`}
            >
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Enter phone..."
              className={`w-full px-3 text-[16px] py-2 border rounded-md ${
                errors.phone
                  ? "border-red-600 focus:border-red-600"
                  : "border-gray-700"
              } `}
              {...register("phone", { required: "required" ,minLength:{
                value:11,
                message: "Phone number must have at least 11 characters"
              } })}
            />
          </div>
          {errors?.phone?.message && (
            <span className="text-red-600 text-sm">{errors?.phone?.message}</span>
          )}

<div>
            <label
              className={`block mb-2 text-sm ${errors.amount && "text-red-600"}`}
            >
              Payable Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter Payable Amount..."
              className={`w-full px-3 text-[16px] py-2 border appearance-none rounded-md ${
                errors.amount
                  ? "border-red-600 focus:border-red-600"
                  : "border-gray-700"
              } `}
              {...register("amount", { required: true })}
            />
          </div>
          {errors.amount && (
            <span className="text-red-600 text-sm">Amount should be number</span>
          )}
          
        <div className="py-4 flex justify-between">
          <button type="submit" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">Submit</button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400" onClick={()=>setShowModal(false)}>
            Close
          </button>
        </div>
        </form>
      </div>
    </div>
    );
};

export default Modal;
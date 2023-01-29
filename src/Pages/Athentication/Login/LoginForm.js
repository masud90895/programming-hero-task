import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const loginData=(data)=>{
    console.log(data);
  }
   
    return (
      <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#bfe6f8] mt-10">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm text-gray-900">Sign in to access your account</p>
	</div>
	<form onSubmit={handleSubmit(loginData)} className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label  className={`block mb-2 text-sm ${errors.email && "text-red-600"}`}>Email address</label>
				<input type="email" name="email" id="email" placeholder="Enter email..." className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-600 focus:border-red-600" : "border-gray-700"} `} {...register("email", { required: true })} />
			</div>
      {errors.email && <span className='text-red-600'>Email Fild is required</span>}
			<div>
				<div className="flex justify-between mb-2">
					<label  className={`text-sm ${errors.password && "text-red-600"}`}>Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className={`w-full px-3 py-2 border rounded-md ${errors.password ? "border-red-600 focus:border-red-600" : "border-gray-700"} `} {...register("password", { required: true ,minLength : 6 })}  />
			</div>
      {errors.password && <span className='text-red-600'>Password need more than 6 characters</span>}   
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#219ebc] text-gray-900 hover:bg-[#bfe6f8] border border-[#bfe6f8] hover:border-[#219ebc]">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-700">Don't have an account yet?
				<Link to="../register" className="hover:underline text-[#219ebc]">Sign up</Link>.
			</p>
		</div>
	</form>
</div>
    );
};

export default LoginForm;
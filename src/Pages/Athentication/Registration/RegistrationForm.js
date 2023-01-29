import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
	const navigate = useNavigate()

    const RegistrationData=(data)=>{
      console.log(data);
	  fetch(`${process.env.REACT_APP_serverURL}/api/registration`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
		if(result.status === "ok"){
			toast.success("User created successfully.please login")
			reset()
			navigate('/')
		}else if(result.error === 'User Exists'){
			toast.error("User already exists")
		}else{
			toast.error("Server not responding.please wait...")
		}
      }); 
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#bfe6f8] mt-10">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Registration</h1>
	</div>
	<form onSubmit={handleSubmit(RegistrationData)} className="space-y-12 ng-untouched ng-pristine ng-valid">
		

		<div className="space-y-4">
		<div>
				<label  className={`block mb-2 text-sm ${errors.firstName && "text-red-600"}`}>First Name</label>
				<input type="text" name="firstName" id="firstName" placeholder="Enter firstName..." className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? "border-red-600 focus:border-red-600" : "border-gray-700"} `} {...register("firstName", { required: true })} />
			</div>
      {errors.email && <span className='text-red-600'>firstName is required</span>}

	  <div>
				<label  className={`block mb-2 text-sm ${errors.lastName && "text-red-600"}`}>Last Name</label>
				<input type="text" name="lastName" id="lastName" placeholder="Enter lastName..." className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? "border-red-600 focus:border-red-600" : "border-gray-700"} `} {...register("lastName", { required: true })} />
			</div>
      {errors.lastName && <span className='text-red-600'>LastName is required</span>}




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
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#219ebc] text-gray-900 hover:bg-[#bfe6f8] border border-[#bfe6f8] hover:border-[#219ebc]">Register</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-700">Already have account?
				<Link to="../login" className="hover:underline text-[#219ebc]">Login</Link>.
			</p>
		</div>
	</form>
</div>
    );
};

export default RegistrationForm;
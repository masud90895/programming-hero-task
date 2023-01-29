import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="">
        <div className="flex items-center justify-center ">
            <div className="bg-white  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                <div className="flex flex-col items-center ">
                    <img loading="lazy" className="px-4 hidden md:block" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                    <img loading="lazy" className="md:hidden" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                    <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
                    <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
                    <Link to='/'><button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;
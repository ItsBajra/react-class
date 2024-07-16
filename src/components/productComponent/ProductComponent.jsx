import React from 'react';

export default function ProductComponent() {
    return (
        <div className='flex flex-wrap justify-center space-x-6 mx-auto'>
            <div className='w-1/4 h-56 bg-gray-200 text-center mt-20 rounded-xl'>
                <h1 className='text-xl mt-5 text-green-600'>Welcome to Product page</h1>
                <input type="text" className='mt-5 w-4/5 h-10 border-2 border-gray-300 ' placeholder='  Enter product name...'/>
                <br />
                <button className='w-32 h-10 bg-green-300 rounded-xl mt-5 mb-5 mr-2 ease-in-out duration-500 hover:w-36 hover:h-11 hover:bg-green-400'>Add Product</button>
                <button className='w-32 h-10 bg-green-300 rounded-xl mt-5 mb-5 mr-2 ease-in-out duration-500 hover:w-36 hover:h-11 hover:bg-green-400'>Remove Product</button>
            </div>

        </div>
    )
}
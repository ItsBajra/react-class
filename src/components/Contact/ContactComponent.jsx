import React from 'react';

export default function ContactComponent() {
    return (
        <div className='flex flex-wrap justify-center space-x-6 mx-auto'>
            <div className='w-full md:w-1/3 h-auto bg-gray-200 text-center mt-20 rounded-xl p-5'>
                <h1 className='text-2xl mt-5 text-green-600'>Contact Us</h1>
                <form className='mt-5'>
                    <input type="text" className='mt-2 w-full h-10 border-2 border-gray-300 px-3' placeholder='Enter your name' />
                    <input type="email" className='mt-2 w-full h-10 border-2 border-gray-300 px-3' placeholder='Enter your email' />
                    <textarea className='mt-2 w-full h-32 border-2 border-gray-300 px-3' placeholder='Your message' />
                    <button type="submit" className='w-full h-10 bg-green-300 rounded-xl mt-5 ease-in-out duration-500 hover:w-full hover:h-12 hover:bg-green-400'>Submit</button>
                </form>
            </div>
        </div>
    );
}

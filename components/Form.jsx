import React from 'react'

const Form = () => {
  return (
    <div className='justify-around'>
        <form  className='space-y-4 w-96 text-ascot-font-color'>
            <div className='flex justify-around py-5 bg-gray-100 rounded-xl'>
                <p className=''>Auctions Ends In:</p>
                <p className='font-semibold'>1d 10:06:58</p>
            </div>
            <div className='flex justify-around py-5 bg-gray-100 rounded-xl'>
                <p className='-ml-4'>Total Number Of Bids:</p>
                <p className='font-semibold'>0</p>
            </div>
            <div className='py-5 space-y-3 bg-gray-100 rounded-xl'>
                <div className='flex justify-around pl-4'>
                    <p className='pt-1 pl-2'>Your Bid:</p>
                    <input className='p-1 pl-8 scale-x-110 border-2 border-gray-300 border-solid rounded-md placeholder:text-gray-500' placeholder='70 KWD' />
                </div>
                <div className='flex pl-12'>
                    <textarea className='justify-around p-1 pl-6 scale-x-105 border-2 border-gray-300 border-solid rounded-md w-80 placeholder:text-gray-400 placeholder:text-lg h-36' placeholder='leave a comment...' />
                </div>
                <div className="flex justify-around pl-8 space-x-2 text-sm">
                    <button type="button" className="justify-between inline-block p-4 mx-4 font-medium leading-tight text-white uppercase transition duration-150 ease-in-out scale-x-105 bg-red-600 shadow-md rounded-xl m w-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0">Bid 70 KWD</button>
                </div>
                <div className='flex justify-center pt-3'>
                <p className='text-xs '>Need help?</p>
                <p className='pl-1 text-xs font-bold underline underline-offset-2'>Contact us for this product</p>
                </div>
            </div>
        
            <div class="flex items-center justify-between">
            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button> */}
            {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a> */}
            </div>
        </form>
    </div>


  )
}

export default Form
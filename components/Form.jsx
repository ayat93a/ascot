import React from 'react'
import Header from './Header'

const Form = () => {
  return (
    <div className='px-4 pl-12 -mt-20 md:justify-around md:pt-20 md:pl-0'>
        <p className='pb-4 pl-6 -mt-8 text-3xl font-bold md:hidden text-ascot-font-color'>Harley-Davidson open face helmet for women</p>
        <form  className='w-screen space-y-4 md:w-96 text-ascot-font-color '>
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
                    <p className='pt-1 pl-1 md:pl-2 '>Your Bid:</p>
                    <input className='p-1 pl-4 scale-x-110 border-2 border-gray-300 border-solid rounded-md md:pl-8 placeholder:text-gray-500' placeholder='70 KWD' />
                </div>
                <div className='flex pl-5 md:pl-12'>
                    <textarea className='justify-around p-1 pl-4 scale-x-95 border-2 border-gray-300 border-solid rounded-md md:scale-x-105 w-96 md:w-80 placeholder:text-gray-400 placeholder:text-lg h-36' placeholder='leave a comment...' />
                </div>
                <div className="flex justify-around pl-8 space-x-2 text-sm">
                    <button type="button" className="justify-between inline-block p-4 -ml-3.5 font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 shadow-md md:mx-4 md:scale-x-105 rounded-xl md:ml-0 w-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0">Bid 70 KWD</button>
                </div>
                <div className='flex justify-center pt-3'>
                <p className='text-xs '>Need help?</p>
                <p className='pl-1 text-xs font-bold underline underline-offset-2'>Contact us for this product</p>
                </div>
            </div>
        
        </form>
    </div>


  )
}

export default Form